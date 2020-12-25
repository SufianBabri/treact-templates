import React from 'react';
import tw from 'twin.macro';
import AnimationRevealPage from '../helpers/AnimationRevealPage';


import Hero from '../components/hero/TwoColumnWithFeaturesAndTestimonial';
import Features from '../components/features/ThreeColWithSideImage';
import MainFeature from '../components/features/TwoColWithTwoHorizontalFeaturesAndButton';
import FeatureStats from '../components/features/ThreeColCenteredStatsPrimaryBackground';
import Pricing from '../components/pricing/TwoPlansWithDurationSwitcher';
import Blog from '../components/blogs/GridWithFeaturedPost';
import Testimonial from '../components/testimonials/TwoColumnWithImageAndRating';
import FAQ from '../components/faqs/SingleCol';
import GetStarted from '../components/cta/GetStartedLight';
import Footer from '../components/footers/FiveColumnWithInputForm';

const HighlightedText = tw.span`text-primary-500`;

export default () => {
	return (
		<AnimationRevealPage>
			<Hero />
			<FeatureStats />
			<Features
				heading={<>Amazing <HighlightedText>Features</HighlightedText></>}
			/>
			<MainFeature
				heading={<>Cloud built by and for <HighlightedText>Professionals</HighlightedText></>}
			/>
			<Testimonial
				heading={<>Our Clients <HighlightedText>Love Us</HighlightedText></>}
			/>
			<Pricing
				heading={<>Flexible <HighlightedText>Plans</HighlightedText></>}
			/>
			<FAQ
				heading={<>Any <HighlightedText>Questions ?</HighlightedText></>}
			/>
			<Blog
				subheading="Blog"
				heading={<>We love <HighlightedText>Writing</HighlightedText></>}
			/>
			<GetStarted />
			<Footer />
		</AnimationRevealPage>
	);
}
