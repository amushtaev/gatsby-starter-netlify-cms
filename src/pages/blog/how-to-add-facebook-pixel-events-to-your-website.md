---
templateKey: blog-post
categories:
  - Facebook Ads
categories-slug:
  - facebook-ads
title: How to Add Facebook Pixel Events to Your Website
date: 2020-07-09
description: Need modify desk.
featuredpost: false
featuredimage: /img/facebook-pixel-events-featured-image.jpg
image: /img/facebook-pixel-events-featured-image.jpg
seotitle: Everything You Need to Know About Facebook Pixel Events
focuskeyphrase: facebook pixel events
tags:
  - brewing
  - chemex
---
<!--StartFragment-->

With its four products — Facebook, WhatsApp, Messenger, and Instagram — Facebook Inc. is leading the world’s social media and messaging market.

![Facebook pixel events — Facebook products](/img/facebook-pixel-events-facebook-products-788x1024.jpg)

According to DataReportal’s Digital 2020: Global Digital Overview, the Facebook family of apps and services has over [7 billion monthly active users](https://www.statista.com/chart/5194/active-users-of-social-networks-and-messaging-services/).

If you’re going to take advantage of one of Facebook’s platforms to boost your website or online store professionally and show ads to a huge army of users, you’ll have no choice but to set up [Facebook pixel](https://softcube.com/what-is-facebook-pixel-and-why-use-it/) code.

If you’re reading this article, we assume you’ve found out [how to create a Facebook pixel](https://softcube.com/how-to-create-a-facebook-pixel/) and add it to the header of every page of your website. Moreover, you’ve probably already done it!

That means you’re ready to set up events for your Facebook pixel. And we’re happy to assist you in this endeavour.

Make yourself comfortable, grab a cup of your favorite beverage, and let’s start.

## What Are Facebook Pixel Events?

Probably you already know the answer. Still, practice makes perfect.

Facebook pixel events are actions taken by website visitors after they click on [Facebook](https://softcube.com/best-facebook-video-ad-examples-2019/), [Instagram](https://softcube.com/recommendations-for-instagram-sponsored-ads/), [Messenger](https://softcube.com/how-to-start-a-personal-chat-with-messenger-ads/), or [Audience Network](https://softcube.com/facebook-audience-network-complete-guide/) ads. These events are registered by code added to the website pages where a publisher wants these actions to be tracked.

![Facebook pixel events — Events Manager](/img/facebook-pixel-events-manager-1024x631.jpg)

If Facebook pixel is the backbone of Facebook marketing, Facebook pixel events are the vertebrae.

Thanks to Facebook pixel event tracking, you can:

- advance your targeting with [Custom Audiences](https://softcube.com/guide-to-facebook-custom-audiences/) and [Lookalike Audiences](https://softcube.com/how-to-use-facebook-lookalike-audiences/)
- optimize your conversions with [value optimization](https://www.facebook.com/business/help/296463804090290?id=561906377587030)
- evaluate the influence of your ads with [conversion lift tests](https://www.facebook.com/business/help/688346554927374?id=546437386202686), Ads Manager reports, and the [Facebook Attribution](https://www.facebook.com/business/measurement/attribution) tool
- get cross-platform and omni-channel insights with [Facebook Analytics](https://analytics.facebook.com/).

Now let’s review the major types of Facebook pixel events available so far.

## Major Types of Facebook Pixel Events

Events powered by Facebook pixel are divided into three categories: standard events, custom events, and custom conversions.

### Standard Events

Facebook pixel standard events are predetermined events used to track actions resulting in the most common conversions that happen on a website.

![Facebook pixel events — standard events](/img/facebook-pixel-events-standard-events.jpg)

Here’s the list of Facebook pixel events that are built into the platform:

\[table id=15 /\]

When it comes to tracking predefined conversions on Facebook, standard pixel events may have [object properties](https://developers.facebook.com/docs/facebook-pixel/reference/#object-properties) and [custom properties](https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-properties) that you can use to broaden tracking capabilities for actions taken by your website community. To figure everything out, you’ll need knowledge of the JSON programming language or the assistance of a professional web developer.

### Custom Events

Facebook pixel custom events are used in two cases. 

![Facebook pixel events — custom events](/img/facebook-pixel-events-custom-events.jpg)

The first case is when you haven’t found the event you need in the list of standard events and you need to create a unique event for your website. 

The second case is when you’re [defining custom audiences](https://developers.facebook.com/docs/facebook-pixel/implementation/custom-audiences) for ad optimization.

As with standard events, you can include [object properties](https://developers.facebook.com/docs/facebook-pixel/reference/#object-properties) and [custom properties](https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-properties) for your custom events as well.

### Custom Conversions

Facebook pixel custom conversions have four use cases.

The first is optimizing your ad delivery for users’ actions you can’t register either with standard or custom events. In this case, you need to pick a standard event that’s more to correspond to the event you want to track.

The second use case is for creating more specific rules for events or URLs. A custom conversion is a great way to track Facebook pixel e-commerce events. For example, say you started a summer sale and you want to find out how many purchases of men’s sandals you’ve made for an amount over $30.

![Facebook pixel events — custom conversions](/img/facebook-pixel-events-custom-conversions.jpg)

The third use case is for adding standard events without adding pixel event code to your website. After you install Facebook Pixel code, you can go to **Custom Conversions** in Events Manager and use the **All URL Traffic** option. This option allows you to log Page View events, which are part of the Facebook pixel code by default.

If you choose this option, you’ll let Facebook register all visits to all webpages. But keep in mind that Facebook won’t tell you which event has happened and where exactly it has happened.

The fourth purpose is to let you share individual custom conversions with your team or partners instead of sharing your entire pixel event data.  
You can create up to 100 custom conversions per ad account, but you can’t use them with [Dynamic Ads](https://softcube.com/facebook-dynamic-product-ads/).

## How to Set Up Facebook Pixel Events Code

To set up code for Facebook pixel events, first of all, read these recommendations. They’ll help you use your code properly no matter which type of event you take advantage of:

- Add the code snippet of every event and its parameters as they are. Otherwise, your event won’t work or Facebook will log it as an event of another type.
- Set the [value and currency](https://facebook.com/business/help/392174274295227?id=1205376682832142) for events that are related to purchasing products or services.
- Add events in a way that allows you to cover your entire sales or marketing funnel to let Facebook pixel fully understand your customers’ behavior. The event chain example is page view, view category, view content, add to cart, purchase, etc.

Now let’s find out how you can set up events for Facebook pixel and review the installation  process type by type.

### How to Add Standard Events

To add a standard event, you’ll need to:

1. Open the header of the page where you want to log your standard event.
2. Insert Facebook pixel [base code](https://developers.facebook.com/docs/facebook-pixel/implementation) between the **<head>** and **</head>** tags.
3. Insert your Facebook pixel standard event above the **</script>** tag.

Here’s a scheme of what this should look like:

![Facebook pixel events — standard events code](/img/facebook-pixel-events-code.jpg)

Once you set up your standard events, Facebook will start receiving data and you’ll be able to see it in Events Manager. For more details on code implementation, see [Facebook’s developer guidelines](https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#standard-events).

### How to Install Custom Events

To install a custom event, you’ll need:

1. your website code
2. Facebook pixel [base code](https://developers.facebook.com/docs/facebook-pixel/implementation)
3. your Facebook pixel custom event code.

The scheme is the same as for adding a standard event. The only difference is your event code.

![Facebook pixel events — custom events code](/img/facebook-pixel-events-code-example.jpg)

Once you install your custom event code, you’ll be able to monitor your custom events in Events Manager. Follow [this link](https://developers.facebook.com/docs/facebook-pixel/implementation/conversion-tracking#custom-events) if you want to see more information on custom event code implementation.

### How to Create Custom Conversions

Here’s how to create a Facebook pixel event with custom conversions in four steps:

**Step 1.** Go to Events Manager and click the **Custom Conversions** tab on the left.

**Step 2.** Click **Create Custom Conversion**.

**Step 3.** Create a name and description for your custom conversion, choose Facebook pixel as the data source, specify a conversion event, and enter all the necessary details.

**Step 4.** Check all the information you’ve entered and click **Create**.

## Track Events for Facebook Video Ads Made by AI

After you see the entire Facebook pixel events list and create your standard or custom events, don’t forget to test their performance with the Test Events and Diagnostics tools in Events Manager to make sure you receive conversion data without mistakes.

![Facebook pixel events — tools](/img/facebook-pixel-events-tools.jpg)

And if you want to get high conversion rates with Facebook ads, try [Softcube artificial intelligence](https://softcube.com).

The Softcube platform will help you achieve a higher return on investment by producing high-quality video ads automatically, at scale, and for the same money as image ads.

Good luck with tracking your Facebook pixel events!
