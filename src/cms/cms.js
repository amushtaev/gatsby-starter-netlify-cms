import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import TermsOfServicePreview from './preview-templates/TermsOfServicePreview'
import PrivacyPolicyPreview from './preview-templates/PrivacyPolicyPreview'
import MembershipAgreementPreview from './preview-templates/MembershipAgreementPreview'
import CopyrightPreview from './preview-templates/CopyrightPreview'

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('about', TermsOfServicePreview);
CMS.registerPreviewTemplate('about', MembershipAgreementPreview);
CMS.registerPreviewTemplate('about', PrivacyPolicyPreview);
CMS.registerPreviewTemplate('about', CopyrightPreview);
CMS.registerPreviewTemplate('blog', BlogPostPreview);
