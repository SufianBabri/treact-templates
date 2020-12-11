import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Hero from 'components/hero/FullWidthWithImage';
import Features from 'components/features/ThreeColSimple';
import MainFeature from 'components/features/TwoColSingleFeatureWithStats';
import SliderCard from 'components/cards/ThreeColSlider';
import TrendingCard from 'components/cards/TwoTrendingPreviewCardsWithImage';
import Blog from 'components/blogs/PopularAndRecentBlogPosts';
import Testimonial from 'components/testimonials/TwoColumnWithImageAndProfilePictureReview';
import FAQ from 'components/faqs/SimpleWithSideImage';
import SubscribeNewsLetterForm from 'components/forms/SimpleSubscribeNewsletter';
import Footer from 'components/footers/MiniCenteredFooter';

export default () => (
	<AnimationRevealPage>
		<Hero />
		<Features />
		<SliderCard />
		<TrendingCard />
		<MainFeature />
		<Blog />
		<Testimonial textOnLeft={true} />
		<FAQ />
		<SubscribeNewsLetterForm />
		<Footer />
	</AnimationRevealPage>
);
