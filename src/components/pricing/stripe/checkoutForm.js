import {
  loadStripe,
  StripeCardNumberElementChangeEvent,
  StripeError,
  // Token,
} from '@stripe/stripe-js'
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
  Elements,
} from '@stripe/react-stripe-js'
import { useUserInfo } from 'components/auth/authenticated-router'
import { BigButton } from 'components/buttons/Big'
import { OverlayWithLoader } from 'components/semipolar-loader'
import { Box, Button, Layer, Text } from 'grommet'
import { PlanName } from 'core'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import styled from 'styled-components'
import { BankCard, Close, Question } from 'components/softcube-icons'
import { IPlan, IPricing } from '../components/pricing/stripe/plans'

const InputLabel = styled(Text)`
  height: 18px;
  width: auto;
  color: #000;
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 7px;
`

const CvcTooltip = styled.span`
  position: absolute;
  pointer-events: none;
  opacity: ${(props) => (props.ready ? 1 : 0)};
  padding: 12px;
  width: 208px;
  border-radius: 2px;
  background-color: #000;
  box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.07);
  color: #fff;
  font-size: 10px;
  font-weight: 500;
  letter-spacing: 0.5px;
  line-height: 16px;
  transition: all 0.2s ease-in;
  transform: translateY(-100%) translateX(-50%);
  top: -10px;
  left: 25%;
`

function CardField(setIsReadyForm, onChange) {
  const [numberError, setNumberError] = useState(undefined)
  const [expiryError, setExpiryError] = useState(undefined)
  const [cvcError, setCvcError] = useState(undefined)
  const [focusNumber, setFocusNumber] = useState(false)
  const [focusExpiry, setFocusExpiry] = useState(false)
  const [focusCvc, setFocusCvc] = useState(false)
  const [cvcInfo, setCvcInfo] = useState(false)

  return (
    <>
      <Box style={{ position: 'relative' }}>
        <InputLabel>Card Number</InputLabel>
        <Box style={{ position: 'absolute', top: -3, right: 0 }}>
          <BankCard />
        </Box>
        <Box
          width="355px"
          border={{ color: numberError ? 'red' : focusNumber ? '#00acff' : '' }}
          round="2px"
          pad="7px 12px"
        >
          <CardNumberElement
            onFocus={() => {
              setFocusNumber(true)
            }}
            onBlur={() => {
              setFocusNumber(false)
            }}
            onChange={(e) => {
              onChange(e)
              setNumberError(e.error)
            }}
          />
        </Box>
        <Text color="red" style={{ fontSize: '12px', lineHeight: '16px' }}>
          {numberError?.message}
        </Text>
      </Box>
      <Box margin={{ top: '15px' }} pad={{ bottom: '32px' }} direction="row">
        <Box>
          <InputLabel>Expiration Date</InputLabel>
          <Box
            width="170px"
            // eslint-disable-next-line no-nested-ternary
            border={{
              color: expiryError ? 'red' : focusExpiry ? '#00acff' : '',
            }}
            round="2px"
            pad="7px 12px"
          >
            <CardExpiryElement
              onFocus={() => {
                setFocusExpiry(true)
              }}
              onBlur={() => {
                setFocusExpiry(false)
              }}
              onChange={(e) => {
                setExpiryError(e.error)
              }}
            />
          </Box>
          <Text color="red" size="12px" style={{ lineHeight: '16px' }}>
            {expiryError?.message}
          </Text>
        </Box>
        <Box style={{ position: 'relative' }} margin={{ left: '15px' }}>
          <CvcTooltip ready={cvcInfo}>
            The 3-digit code on the back of most cards. For American Express, it
            is the 4-digit code on the front of the card.
          </CvcTooltip>
          <Box
            onMouseOver={() => {
              setCvcInfo(true)
            }}
            onMouseLeave={() => {
              setCvcInfo(false)
            }}
            style={{ position: 'absolute', top: 0, left: 30 }}
          >
            <Question size={16} color="#9C9C9C" />
          </Box>
          <InputLabel>CVC</InputLabel>
          <Box
            width="170px"
            border={{ color: cvcError ? 'red' : focusCvc ? '#00acff' : '' }}
            round="2px"
            pad="7px 12px"
          >
            <CardCvcElement
              onFocus={() => {
                setFocusCvc(true)
              }}
              onBlur={() => {
                setFocusCvc(false)
              }}
              onReady={() => setIsReadyForm(true)}
              onChange={(e) => {
                setCvcError(e.error)
              }}
            />
          </Box>
          <Text color="red" size="12px" style={{ lineHeight: '16px' }}>
            {cvcError?.message}
          </Text>
        </Box>
      </Box>
    </>
  )
}

const SubscribeButton = styled(BigButton)`
  margin: 32px 0 0 0;
`

function SubmitButton(processing, title, disabled) {
  return (
    <div style={{ textAlign: 'center' }}>
      <SubscribeButton
        submit
        text={processing ? 'Processing...' : title}
        disabled={processing || disabled}
      />
    </div>
  )
}

const Total = styled.span`
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  color: #000;
`

const TotalBold = styled.span`
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-size: 20px;
  line-height: 25px;
  font-weight: bold;
  color: #000;
`

const CheckoutForm = (check, total, setIsReadyForm, subscribe, plan, email) => {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState(undefined)
  const [cardComplete, setCardComplete] = useState(false)
  const [processing, setProcessing] = useState(false)
  const [planName, setPlanName] = useState(PlanName.BasicMonthly)

  useEffect(() => {
    if (plan === 'BASIC') {
      check && setPlanName(PlanName.BasicAnnual)
      !check && setPlanName(PlanName.BasicMonthly)
    }
    if (plan === 'PRO') {
      check && setPlanName(PlanName.ProAnnual)
      !check && setPlanName(PlanName.ProMonthly)
    }
  }, [plan, check])

  const handleSubmit = async (event) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    if (error) {
      const element = elements.getElement('card')
      if (element) {
        element.focus()
      }
      return
    }

    if (cardComplete) {
      setProcessing(true)
    }

    const payload = await stripe.createToken(
      elements.getElement(CardNumberElement)
    )

    setProcessing(false)

    if (payload.error) {
      setError(payload.error)
    } else {
      subscribe(payload.token.id, planName, email)
    }
  }

  return (
    <form className="Form" onSubmit={handleSubmit}>
      <Box
        style={{ position: 'relative' }}
        pad={{ top: '32px' }}
        margin={{ vertical: '32px' }}
        border={{ side: 'horizontal', color: '#e5e5e5' }}
      >
        <CardField
          setIsReadyForm={setIsReadyForm}
          onChange={(e) => {
            setError(e.error)
            setCardComplete(e.complete)
          }}
        />
      </Box>
      <div style={{ textAlign: 'center' }}>
        <Total>
          Your Total:{' '}
          <TotalBold>
            {`$${check ? total.annual.ann : total.monthly.mon} / ${
              check ? 'Year' : 'Month'
            }`}
          </TotalBold>
        </Total>
      </div>
      <SubmitButton
        title="Purchase Now"
        processing={processing}
        error={error}
        disabled={!stripe}
      />
    </form>
  )
}

const stripePromise = loadStripe('pk_test_ue5JZO0aNYrwQEPu5ogehkyF')

const PopupContent = styled(Box)`
  height: auto !important;
  width: 494px;
  padding: 36px 50px 42px;
  opacity: ${(props) => (props.ready ? 1 : 0)};
  transition: all 0.5s ease;
`

const PlanHeading = styled.span`
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 25px;
  color: #000;
`

const Email = styled.span`
  font-family: Source Sans Pro, sans-serif;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: rgba(0, 0, 0, 0.4);
`

const CheckoutFormModal = (
  check,
  plan,
  closeForm,
  isSubscribing,
  subscribe,
  subscribeResult
) => {
  const { email } = useUserInfo()
  const [readyFrom, setIsReadyForm] = useState(false)
  const hist = useHistory()

  return (
    <Layer
      style={{ backgroundColor: '#ffffff00', borderRadius: 0 }}
      animation={false}
    >
      <div
        style={{
          width: '456px',
          height: 'auto',
          boxSizing: 'border-box',
          position: 'relative',
          backgroundColor: '#fff',
          fontFamily: 'Source Sans Pro',
        }}
      >
        <Box style={{ position: 'absolute', right: '10px', top: '10px' }}>
          <Button
            icon={<Close color="#666" size={24} />}
            onClick={() => {
              closeForm()
            }}
          />
        </Box>
        {subscribeResult !== undefined && subscribeResult && (
          <Box pad="40px" align="center">
            <Text color="green">Thank you for subscribing!</Text>
            <Button
              style={{ borderRadius: '2px' }}
              margin={{ top: '32px' }}
              primary
              color="#3456a5"
              label="Get Videos"
              onClick={() => {
                closeForm()
                hist.push('/my-videos')
              }}
            />
          </Box>
        )}
        {subscribeResult !== undefined && !subscribeResult && (
          <Box pad="40px" align="center">
            <Text color="red">Something went wrong. Try again later</Text>
            <Button
              style={{ borderRadius: '2px' }}
              margin={{ top: '32px' }}
              primary
              color="#3456a5"
              label="Ok"
              onClick={() => {
                closeForm()
              }}
            />
          </Box>
        )}
        {(!readyFrom || isSubscribing) && <OverlayWithLoader />}
        {subscribeResult === undefined && (
          <PopupContent
            ready={readyFrom && !isSubscribing}
            align="center"
            alignContent="center"
          >
            <PlanHeading>{`${plan.name} ${
              check ? 'ANNUAL' : 'MONTHLY'
            }`}</PlanHeading>
            <Email>{email}</Email>
            <Elements stripe={stripePromise}>
              <CheckoutForm
                setIsReadyForm={setIsReadyForm}
                check={check}
                total={plan.pricing}
                email={email}
                plan={plan.name}
                subscribe={subscribe}
              />
            </Elements>
          </PopupContent>
        )}
      </div>
    </Layer>
  )
}

export default CheckoutFormModal
