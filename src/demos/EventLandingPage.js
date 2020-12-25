import React from 'react';
import AnimationRevealPage from '../helpers/AnimationRevealPage';
import Hero from '../components/hero/BackgroundAsImageWithCenteredContent';
import Features from '../components/features/VerticalWithAlternateImageAndText';
import Blog from '../components/blogs/ThreeColSimpleWithImage';
import Testimonial from '../components/testimonials/TwoColumnWithImage';
import ContactUsForm from '../components/forms/SimpleContactUs';
import Footer from '../components/footers/SimpleFiveColumn';

export default () => (
	<AnimationRevealPage>
		<Hero />
		<Features />
		<Blog />
		<Testimonial />
		<ContactUsForm />
		<Footer />
	</AnimationRevealPage>
);
