import AnimationRevealPage from '../helpers/AnimationRevealPage';
import tw from 'twin.macro';
import Header from '../components/headers/light';
import Footer from '../components/footers/FiveColumnWithInputForm';
import MainFeature1 from '../components/features/TwoColWithButton';
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2";
import Features from '../components/features/ThreeColSimple';
// import Features from "components/features/ThreeColWithSideImage";
import TeamCardGrid from '../components/cards/ProfileThreeColGrid';

import SupportIconImage from '../images/support-icon.svg';
import ShieldIconImage from '../images/shield-icon.svg';
import CustomerLoveIconImage from '../images/simple-icon.svg';

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
	return (
		<AnimationRevealPage>
			<Header />
			<MainFeature1
				subheading={<Subheading>About Treact</Subheading>}
				heading="We are a modern design agency."
				buttonRounded={false}
				primaryButtonText="See Portfolio"
				imageSrc="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
			/>
			<MainFeature1
				subheading={<Subheading>Our Vision</Subheading>}
				heading="We aim to disrupt the design space."
				buttonRounded={false}
				primaryButtonText="Contact Us"
				imageSrc="https://images.unsplash.com/3/doctype-hi-res.jpg?ixlib=rb-1.2.1&auto=format&fit=crop&w=768&q=80"
				textOnLeft={false}
			/>
			<Features
				subheading={<Subheading>Our Values</Subheading>}
				heading="We follow these."
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
				cards={[
					{
						imageSrc: SupportIconImage,
						title: '24/7 Support',
						url: 'https://google.com',
						description: 'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport'
					},
					{
						imageSrc: ShieldIconImage,
						title: 'Strong Teams',
						description: 'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport'
					},
					{
						imageSrc: CustomerLoveIconImage,
						title: 'Customer Satisfaction',
						description: 'Lorem ipsum donor amet siti ceali placeholder text alipiscing elit sed do eiusmod temport'
					}
				]}
				linkText=""
			/>
			<TeamCardGrid
				subheading={<Subheading>Our Team</Subheading>}
			/>
			<Footer />
		</AnimationRevealPage>
	);
};
