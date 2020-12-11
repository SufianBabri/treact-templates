import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Header from 'components/headers/light';
import Pricing from 'components/pricing/TwoPlansWithDurationSwitcher';
import Testimonial from 'components/testimonials/ThreeColumnWithProfileImage';
import Footer from 'components/footers/FiveColumnWithInputForm';
import FAQ from 'components/faqs/SingleCol';

export default () => {
	return (
		<AnimationRevealPage>
			<Header />
			<Pricing />
			<Testimonial
				heading="Our Paying Customers"
			/>
			<FAQ />
			<Footer />
		</AnimationRevealPage>
	);
};
