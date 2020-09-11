import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import TermsOfServicePreview from './preview-templates/TermsOfServicePreview'
import PrivacyPolicyPreview from './preview-templates/PrivacyPolicyPreview'
import MembershipAgreementPreview from './preview-templates/MembershipAgreementPreview'
import CopyrightPreview from './preview-templates/CopyrightPreview'

/*import AboutPagePreview from './preview-templates/AboutPagePreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'*/

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

/*CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)*/
CMS.registerPreviewTemplate('about', TermsOfServicePreview);
CMS.registerPreviewTemplate('about', MembershipAgreementPreview);
CMS.registerPreviewTemplate('about', PrivacyPolicyPreview);
CMS.registerPreviewTemplate('about', CopyrightPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
