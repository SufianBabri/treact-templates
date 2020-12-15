import React from 'react';
import {useParams} from 'react-router-dom';
import AnimationRevealPage from 'helpers/AnimationRevealPage';

import EventLandingPage from 'demos/EventLandingPage';
import HotelTravelLandingPage from 'demos/HotelTravelLandingPage';
import AgencyLandingPage from 'demos/AgencyLandingPage';
import SaaSProductLandingPage from 'demos/SaaSProductLandingPage';
import RestaurantLandingPage from 'demos/RestaurantLandingPage';
import ServiceLandingPage from 'demos/ServiceLandingPage';
import HostingCloudLandingPage from 'demos/HostingCloudLandingPage';

import EventLandingPageImageSrc from 'images/demo/EventLandingPage.jpeg';
import HotelTravelLandingPageImageSrc from 'images/demo/HotelTravelLandingPage.jpeg';
import AgencyLandingPageImageSrc from 'images/demo/AgencyLandingPage.jpeg';
import SaaSProductLandingPageImageSrc from 'images/demo/SaaSProductLandingPage.jpeg';
import RestaurantLandingPageImageSrc from 'images/demo/RestaurantLandingPage.jpeg';
import ServiceLandingPageImageSrc from 'images/demo/ServiceLandingPage.jpeg';
import HostingCloudLandingPageImageSrc from 'images/demo/HostingCloudLandingPage.jpeg';


import LoginPage from 'pages/Login';
import SignupPage from 'pages/Signup';
import PricingPage from 'pages/Pricing';
import AboutUsPage from 'pages/AboutUs';
import ContactUsPage from 'pages/ContactUs';
import BlogIndexPage from 'pages/BlogIndex';
import TermsOfServicePage from 'pages/TermsOfService';
import PrivacyPolicyPage from 'pages/PrivacyPolicy';

import LoginPageImageSrc from 'images/demo/LoginPage.jpeg';
import SignupPageImageSrc from 'images/demo/SignupPage.jpeg';
import PricingPageImageSrc from 'images/demo/PricingPage.jpeg';
import AboutUsPageImageSrc from 'images/demo/AboutUsPage.jpeg';
import ContactUsPageImageSrc from 'images/demo/ContactUsPage.jpeg';
import BlogIndexPageImageSrc from 'images/demo/BlogIndexPage.jpeg';
import TermsOfServicePageImageSrc from 'images/demo/TermsOfServicePage.jpeg';
import PrivacyPolicyPageImageSrc from 'images/demo/PrivacyPolicyPage.jpeg';

import BackgroundAsImageHero from 'components/hero/BackgroundAsImage';
import IllustrationAndVideoHero from 'components/hero/TwoColumnWithVideo';
import IllustrationAndInputHero from 'components/hero/TwoColumnWithInput';
import FeaturesAndTestimonialHero from 'components/hero/TwoColumnWithFeaturesAndTestimonial';
import FullWidthWithImageHero from 'components/hero/FullWidthWithImage';
import BackgroundAsImageWithCenteredContentHero from 'components/hero/BackgroundAsImageWithCenteredContent';
import IllustrationAndPrimaryBackgroundHero from 'components/hero/TwoColumnWithPrimaryBackground';

import TwoPlansWithDurationSwitcherPricing from 'components/pricing/TwoPlansWithDurationSwitcher';
import ThreePlansWithHalfPrimaryBackgroundPricing from 'components/pricing/ThreePlansWithHalfPrimaryBackground';
import ThreePlansPricing from 'components/pricing/ThreePlans';

import ThreeColWithSideImageFeatures from 'components/features/ThreeColWithSideImage';
import TwoColWithButtonFeatures from 'components/features/TwoColWithButton';
import ThreeColSimpleFeatures from 'components/features/ThreeColSimple';
import ThreeColWithSideImageWithPrimaryBackgroundFeatures
	from 'components/features/ThreeColWithSideImageWithPrimaryBackground';
import TwoColVerticalWithButtonFeatures from 'components/features/TwoColWithTwoFeaturesAndButtons';
import TwoColHorizontalWithButtonFeatures from 'components/features/TwoColWithTwoHorizontalFeaturesAndButton';
import WithStepsAndImageFeatures from 'components/features/TwoColWithSteps';
import ThreeColumnDashedBorderFeatures from 'components/features/DashedBorderSixFeatures';
import ThreeColCenteredStatsWithPrimaryBackgroundFeatures
	from 'components/features/ThreeColCenteredStatsPrimaryBackground';
import WithStatsAndImageFeatures from 'components/features/TwoColSingleFeatureWithStats';
import WithStatsAndImage2Features from 'components/features/TwoColSingleFeatureWithStats2';
import VerticalWithAlternateImageAndTextFeatures from 'components/features/VerticalWithAlternateImageAndText';

import SliderCards from 'components/cards/ThreeColSlider';
import TrendingCards from 'components/cards/TwoTrendingPreviewCardsWithImage';
import PortfolioCards from 'components/cards/PortfolioTwoCardsWithImage';
import TabGridCards from 'components/cards/TabCardGrid';
import ProfileThreeColGridCards from 'components/cards/ProfileThreeColGrid';
import ThreeColContactDetailsCards from 'components/cards/ThreeColContactDetails';

import ThreeColSimpleWithImageBlog from 'components/blogs/ThreeColSimpleWithImage';
import ThreeColSimpleWithImageAndDashedBorderBlog from 'components/blogs/ThreeColSimpleWithImageAndDashedBorder';
import PopularAndRecentPostsBlog from 'components/blogs/PopularAndRecentBlogPosts';
import GridWithFeaturedPostBlog from 'components/blogs/GridWithFeaturedPost';

import TwoColumnWithImageTestimonial from 'components/testimonials/TwoColumnWithImage';
import TwoColumnWithImageAndProfilePictureReviewTestimonial
	from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview';
import TwoColumnWithImageAndRatingTestimonial from 'components/testimonials/TwoColumnWithImageAndRating';
import ThreeColumnWithProfileImageTestimonial from 'components/testimonials/ThreeColumnWithProfileImage';
import SimplePrimaryBackgroundTestimonial from 'components/testimonials/SimplePrimaryBackground';

import SimpleWithSideImageFAQS from 'components/faqs/SimpleWithSideImage';
import SingleColFAQS from 'components/faqs/SingleCol';
import TwoColumnPrimaryBackgroundFAQS from 'components/faqs/TwoColumnPrimaryBackground';

import SimpleContactUsForm from 'components/forms/SimpleContactUs';
import SimpleSubscribeNewsletterForm from 'components/forms/SimpleSubscribeNewsletter';
import TwoColContactUsForm from 'components/forms/TwoColContactUsWithIllustration';
import TwoColContactUsFullForm from 'components/forms/TwoColContactUsWithIllustrationFullForm';

import GetStartedCTA from 'components/cta/GetStarted';
import GetStartedLightCTA from 'components/cta/GetStartedLight';
import DownloadAppCTA from 'components/cta/DownloadApp';

import SimpleFiveColumnFooter from 'components/footers/SimpleFiveColumn';
import FiveColumnWithInputFormFooter from 'components/footers/FiveColumnWithInputForm';
import FiveColumnWithBackgroundFooter from 'components/footers/FiveColumnWithBackground';
import FiveColumnDarkFooter from 'components/footers/FiveColumnDark';
import MiniCenteredFooter from 'components/footers/MiniCenteredFooter';


export const components = {
	landingPages: {
		RestaurantLandingPage: {
			component: RestaurantLandingPage,
			imageSrc: RestaurantLandingPageImageSrc,
			url: '/components/landingPages/RestaurantLandingPage'
		},
		HotelTravelLandingPage: {
			component: HotelTravelLandingPage,
			imageSrc: HotelTravelLandingPageImageSrc,
			url: '/components/landingPages/HotelTravelLandingPage'
		},
		SaaSProductLandingPage: {
			component: SaaSProductLandingPage,
			imageSrc: SaaSProductLandingPageImageSrc,
			url: '/components/landingPages/SaaSProductLandingPage'
		},
		ServiceLandingPage: {
			component: ServiceLandingPage,
			imageSrc: ServiceLandingPageImageSrc,
			url: '/components/landingPages/ServiceLandingPage'
		},
		EventLandingPage: {
			component: EventLandingPage,
			imageSrc: EventLandingPageImageSrc,
			url: '/components/landingPages/EventLandingPage'
		},
		AgencyLandingPage: {
			component: AgencyLandingPage,
			imageSrc: AgencyLandingPageImageSrc,
			url: '/components/landingPages/AgencyLandingPage'
		},
		HostingCloudLandingPage: {
			component: HostingCloudLandingPage,
			imageSrc: HostingCloudLandingPageImageSrc,
			url: '/components/landingPages/HostingCloudLandingPage'
		}
	},

	innerPages: {
		LoginPage: {
			component: LoginPage,
			imageSrc: LoginPageImageSrc,
			scrollAnimationDisabled: true,
			url: '/components/innerPages/LoginPage'
		},
		SignupPage: {
			component: SignupPage,
			url: `/components/innerPages/SignupPage`,
			imageSrc: SignupPageImageSrc,
			scrollAnimationDisabled: true
		},
		PricingPage: {
			component: PricingPage,
			url: `/components/innerPages/PricingPage`,
			imageSrc: PricingPageImageSrc
		},
		AboutUsPage: {
			component: AboutUsPage,
			url: `/components/innerPages/AboutUsPage`,
			imageSrc: AboutUsPageImageSrc
		},
		ContactUsPage: {
			component: ContactUsPage,
			url: `/components/innerPages/ContactUsPage`,
			imageSrc: ContactUsPageImageSrc
		},
		BlogIndexPage: {
			component: BlogIndexPage,
			url: `/components/innerPages/BlogIndexPage`,
			imageSrc: BlogIndexPageImageSrc
		},
		TermsOfServicePage: {
			component: TermsOfServicePage,
			url: `/components/innerPages/TermsOfServicePage`,
			imageSrc: TermsOfServicePageImageSrc
		},
		PrivacyPolicyPage: {
			component: PrivacyPolicyPage,
			url: `/components/innerPages/PrivacyPolicyPage`,
			imageSrc: PrivacyPolicyPageImageSrc
		}
	},

	blocks: {
		Hero: {
			type: 'Hero Section',
			elements: {
				BackgroundAsImage: {
					name: 'With Background Image',
					component: BackgroundAsImageHero,
					url: '/components/blocks/Hero/BackgroundAsImage'
				},
				IllustrationAndInput: {
					name: 'With Image Illustration and Input',
					component: IllustrationAndInputHero,
					url: '/components/blocks/Hero/IllustrationAndInput'
				},
				IllustrationAndVideo: {
					name: 'With Image Illustration and Video',
					component: IllustrationAndVideoHero,
					url: '/components/blocks/Hero/IllustrationAndVideo'
				},
				FeaturesAndTestimonial: {
					name: 'With Features And Customer Testimonial',
					component: FeaturesAndTestimonialHero,
					url: '/components/blocks/Hero/FeaturesAndTestimonial'
				},
				FullWidthWithImage: {
					name: 'Full Width With Image',
					component: FullWidthWithImageHero,
					url: '/components/blocks/Hero/FullWidthWithImage'
				},
				BackgroundAsImageWithCenteredContent: {
					name: 'Full Width Background Image with centered content',
					component: BackgroundAsImageWithCenteredContentHero,
					url: '/components/blocks/Hero/BackgroundAsImageWithCenteredContent'
				},
				IllustrationAndPrimaryBackground: {
					name: 'Primary Background With Illustration',
					component: IllustrationAndPrimaryBackgroundHero,
					url: '/components/blocks/Hero/IllustrationAndPrimaryBackground'
				}
			}
		},
		Pricing: {
			type: 'Pricing Section',
			elements: {
				TwoPlansWithDurationSwitcher: {
					name: 'Two Plans With Duration Switcher',
					component: TwoPlansWithDurationSwitcherPricing,
					url: '/components/blocks/Pricing/TwoPlansWithDurationSwitcher'
				},
				ThreePlansWithHalfPrimaryBackground: {
					name: 'Three Plans With Primary Background at Top',
					component: ThreePlansWithHalfPrimaryBackgroundPricing,
					url: '/components/blocks/Pricing/ThreePlansWithHalfPrimaryBackground'
				},
				ThreePlans: {
					name: 'Simple Three Plans',
					component: ThreePlansPricing,
					url: '/components/blocks/Pricing/ThreePlans'
				}
			}
		},
		Features: {
			type: 'Features Section',
			elements: {
				ThreeColWithSideImage: {
					name: 'Three Column With Side Image',
					component: ThreeColWithSideImageFeatures,
					url: '/components/blocks/Features/ThreeColWithSideImage'
				},
				TwoColWithButton: {
					name: 'Two Column With Image and Action Button',
					component: TwoColWithButtonFeatures,
					url: '/components/blocks/Features/TwoColWithButton'
				},
				ThreeColSimple: {
					name: 'Three Column Simple',
					component: ThreeColSimpleFeatures,
					url: '/components/blocks/Features/ThreeColSimple'
				},
				ThreeColWithSideImageWithPrimaryBackground: {
					name: 'Three Column With Side Image With Primary Background',
					component: ThreeColWithSideImageWithPrimaryBackgroundFeatures,
					url: '/components/blocks/Features/ThreeColWithSideImageWithPrimaryBackground'
				},
				TwoColHorizontalWithButton: {
					name: 'Two Column With Button and Horizonatal Features with Icon',
					component: TwoColHorizontalWithButtonFeatures,
					url: '/components/blocks/Features/TwoColHorizontalWithButton'
				},
				TwoColVerticalWithButton: {
					name: 'Two Column With Vertical Features and Button',
					component: TwoColVerticalWithButtonFeatures,
					url: '/components/blocks/Features/TwoColVerticalWithButton'
				},
				WithStepsAndImage: {
					name: 'Steps with Image',
					component: WithStepsAndImageFeatures,
					url: '/components/blocks/Features/WithStepsAndImage'
				},
				ThreeColumnDashedBorder: {
					name: 'Three Column With Dashed Primary Border',
					component: ThreeColumnDashedBorderFeatures,
					url: '/components/blocks/Features/ThreeColumnDashedBorder'
				},
				ThreeColCenteredStatsPrimaryBackground: {
					name: 'Three Column With Centered Stats on Primary Background',
					component: ThreeColCenteredStatsWithPrimaryBackgroundFeatures,
					url: '/components/blocks/Features/ThreeColCenteredStatsPrimaryBackground'
				},
				WithStatsAndImage: {
					name: 'Stats With Image',
					component: WithStatsAndImageFeatures,
					url: '/components/blocks/Features/WithStatsAndImage'
				},
				WithStatsAndImage2: {
					name: 'Stats With Image 2',
					component: WithStatsAndImage2Features,
					url: '/components/blocks/Features/WithStatsAndImage2'
				},
				VerticalWithAlternateImageAndText: {
					name: 'Vertical Feature Cards With Alternate Image and Text',
					component: VerticalWithAlternateImageAndTextFeatures,
					url: '/components/blocks/Features/VerticalWithAlternateImageAndText'
				}
			}
		},

		Cards: {
			type: 'Cards',
			elements: {
				Slider: {
					name: 'Three Column Slider',
					component: SliderCards,
					url: '/components/blocks/Cards/Slider'
				},
				Portfolio: {
					name: 'Two Column Portfolio Cards With Images ',
					component: PortfolioCards,
					url: '/components/blocks/Cards/Portfolio'
				},
				TabGrid: {
					name: 'Tab Card Grid With Tab Switcher',
					component: TabGridCards,
					url: '/components/blocks/Cards/TabGrid'
				},
				ProfileThreeColGrid: {
					name: 'Three Column Grid Cards For Profile',
					component: ProfileThreeColGridCards,
					url: '/components/blocks/Cards/ProfileThreeColGrid'
				},
				ThreeColContactDetails: {
					name: 'Three Column Contact Details Cards',
					component: ThreeColContactDetailsCards,
					url: '/components/blocks/Cards/ThreeColContactDetails'
				},
				Trending: {
					name: 'Two Trending Preview Cards With Images',
					component: TrendingCards,
					url: '/components/blocks/Cards/Trending'
				}
			}
		},

		Blog: {
			type: 'Blog Section',
			elements: {
				GridWithFeaturedPost: {
					name: 'Grid With Featured Post',
					component: GridWithFeaturedPostBlog,
					url: '/components/blocks/Blog/GridWithFeaturedPost'
				},
				PopularAndRecentPosts: {
					name: 'Popular And Recent Posts',
					component: PopularAndRecentPostsBlog,
					url: '/components/blocks/Blog/PopularAndRecentPosts'
				},
				ThreeColSimpleWithImage: {
					name: 'Simple Three Column With Image',
					component: ThreeColSimpleWithImageBlog,
					url: '/components/blocks/Blog/ThreeColSimpleWithImage'
				},
				ThreeColSimpleWithImageAndDashedBorder: {
					name: 'Simple Three Column With Image and Dashed Border',
					component: ThreeColSimpleWithImageAndDashedBorderBlog,
					url: '/components/blocks/Blog/ThreeColSimpleWithImageAndDashedBorder'
				}
			}
		},

		Testimonial: {
			type: 'Testimonial Section',
			elements: {
				TwoColumnWithImage: {
					name: 'Two Column With Image',
					component: TwoColumnWithImageTestimonial,
					url: '/components/blocks/Testimonial/TwoColumnWithImage'
				},
				TwoColumnWithImageAndProfilePictureReview: {
					name: 'Two Column With Image And Profile Picture Review',
					component: TwoColumnWithImageAndProfilePictureReviewTestimonial,
					url: '/components/blocks/Testimonial/TwoColumnWithImageAndProfilePictureReview'
				},
				TwoColumnWithImageAndRating: {
					name: 'Two Column With Image And Rating',
					component: TwoColumnWithImageAndRatingTestimonial,
					url: '/components/blocks/Testimonial/TwoColumnWithImageAndRating'
				},
				ThreeColumnWithProfileImage: {
					name: 'Three Column With Profile Image',
					component: ThreeColumnWithProfileImageTestimonial,
					url: '/components/blocks/Testimonial/ThreeColumnWithProfileImage'
				},
				SimplePrimaryBackground: {
					name: 'Simple With Primary Background',
					component: SimplePrimaryBackgroundTestimonial,
					url: '/components/blocks/Testimonial/SimplePrimaryBackground'
				}
			}
		},

		FAQS: {
			type: 'FAQs Section',
			elements: {
				SimpleWithSideImage: {
					name: 'Simple With Side Image',
					component: SimpleWithSideImageFAQS,
					url: '/components/blocks/FAQS/SimpleWithSideImage'
				},
				SingleCol: {
					name: 'Single Column',
					component: SingleColFAQS,
					url: '/components/blocks/FAQS/SingleCol'
				},
				TwoColumnPrimaryBackground: {
					name: 'Two Column With Primary Background',
					component: TwoColumnPrimaryBackgroundFAQS,
					url: '/components/blocks/FAQS/TwoColumnPrimaryBackground'
				}
			}
		},

		Form: {
			type: 'Forms Section',
			elements: {
				SimpleContactUs: {
					name: 'Simple Contact Us',
					component: SimpleContactUsForm,
					url: '/components/blocks/Form/SimpleContactUs'
				},
				SimpleSubscribeNewsletter: {
					name: 'Simple Subscribe newsletter',
					component: SimpleSubscribeNewsletterForm,
					url: '/components/blocks/Form/SimpleSubscribeNewsletter'
				},
				TwoColContactUs: {
					name: 'Two Column Contact Us',
					component: TwoColContactUsForm,
					url: '/components/blocks/Form/TwoColContactUs'
				},
				TwoColContactUsFull: {
					name: 'Two Column Contact Us - Full Form',
					component: TwoColContactUsFullForm,
					url: '/components/blocks/Form/TwoColContactUsFull'
				}
			}
		},

		CTA: {
			type: 'CTA Section',
			elements: {
				GetStarted: {
					name: 'Get Started',
					component: GetStartedCTA,
					url: '/components/blocks/CTA/GetStarted'
				},
				GetStartedLight: {
					name: 'Get Started Light',
					component: GetStartedLightCTA,
					url: '/components/blocks/CTA/GetStartedLight'
				},
				DownloadApp: {
					name: 'Download App',
					component: DownloadAppCTA,
					url: '/components/blocks/CTA/DownloadApp'
				}
			}
		},

		Footer: {
			type: 'Footers Section',
			elements: {
				SimpleFiveColumn: {
					name: 'Simple Five Column',
					component: SimpleFiveColumnFooter,
					url: '/components/blocks/Footer/SimpleFiveColumn'
				},
				FiveColumnWithInputForm: {
					name: 'Five Column With Input Form',
					component: FiveColumnWithInputFormFooter,
					url: '/components/blocks/Footer/FiveColumnWithInputForm'
				},
				FiveColumnWithBackground: {
					name: 'Five Column With background',
					component: FiveColumnWithBackgroundFooter,
					url: '/components/blocks/Footer/FiveColumnWithBackground'
				},
				FiveColumnDark: {
					name: 'Five Column Dark',
					component: FiveColumnDarkFooter,
					url: '/components/blocks/Footer/FiveColumnDark'
				},
				MiniCentered: {
					name: 'Mini Centered Dark',
					component: MiniCenteredFooter,
					url: '/components/blocks/Footer/MiniCentered'
				}
			}
		}
	}
};

export default () => {
	const {type, subtype, name} = useParams();

	try {
		let Component = null;
		if (type === 'blocks' && subtype) {
			Component = components[type][subtype]['elements'][name].component;
			return <AnimationRevealPage disabled>
				<Component />
			</AnimationRevealPage>;
		} else
			Component = components[type][name].component;

		if (Component)
			return <Component />;

		throw new Error('Component Not Found');
	} catch (e) {
		console.log(e);
		return <div>Error: Component Not Found</div>;
	}
}
