import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import Hero from 'components/hero/TwoColumnWithPrimaryBackground';
import Features from 'components/features/ThreeColWithSideImageWithPrimaryBackground';
import MainFeature from 'components/features/TwoColWithButton';
import Pricing from 'components/pricing/ThreePlansWithHalfPrimaryBackground';
import Testimonial from 'components/testimonials/SimplePrimaryBackground';
import FAQ from 'components/faqs/TwoColumnPrimaryBackground';
import Footer from 'components/footers/FiveColumnDark';
import serverRedundancyIllustrationImageSrc from 'images/server-redundancy-illustration.svg';
import serverSecureIllustrationImageSrc from 'images/server-secure-illustration.svg';


export default () => {
	return (
		<AnimationRevealPage>
			<Hero />
			<Features />
			<Pricing />
			<MainFeature
				subheading="Reliable"
				heading="Highly Redundant Servers With Backup"
				imageSrc={serverRedundancyIllustrationImageSrc}
				buttonRounded={false}
			/>
			<MainFeature
				subheading="Secure"
				heading="State of the Art Computer Security"
				imageSrc={serverSecureIllustrationImageSrc}
				buttonRounded={false}
				textOnLeft={false}
			/>
			<Testimonial />
			<FAQ />
			<Footer />
		</AnimationRevealPage>
	);
}
