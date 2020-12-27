import tw from 'twin.macro';
import styled from 'styled-components';
import {SectionHeading, Subheading as SubheadingBase} from '../misc/Headings';
import {PrimaryButton as PrimaryButtonBase} from '../misc/Buttons';
import EmailIllustrationSrc from '../../images/email-illustration.svg';
import {IImageColumnProps, ITextColumnProps} from '../common/ColumnProps';
import {Container} from '../misc/Layouts';

const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn = styled(Column)((props: ITextColumnProps) => [
	tw`md:w-7/12 mt-16 md:mt-0`,
	props.textOnLeft ? tw`md:mr-12 lg:mr-16 md:order-first` : tw`md:ml-12 lg:ml-16 md:order-last`
]);

const Image = styled.div((props: IImageColumnProps) => [
	`background-image: url("${props.imageSrc}");`,
	tw`rounded bg-contain bg-no-repeat bg-center h-full`
]);
const TextContent = tw.div`lg:py-8 text-center md:text-left`;

const Subheading = tw(SubheadingBase)`text-center md:text-left`;
const Heading = tw(SectionHeading)`mt-4 font-black text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`mt-4 text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100`;

const Form = tw.form`mt-8 md:mt-10 text-sm flex flex-col lg:flex-row`;
const Input = tw.input`border-2 px-5 py-3 rounded focus:outline-none font-medium transition duration-300 hocus:border-primary-500`;

const SubmitButton = tw(PrimaryButtonBase)`inline-block lg:ml-6 mt-6 lg:mt-0`;

interface IProps {
	subheading?: string | JSX.Element;
	heading?: string | JSX.Element;
	description?: string | JSX.Element;
	submitButtonText?: string;
	formAction?: string;
	formMethod?: string;
	textOnLeft?: boolean;
}

export default ({
					subheading = 'Contact Us',
					heading = <>Feel free to <span tw="text-primary-500">get in touch</span>
						<wbr />
						with us.</>,
					description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
					submitButtonText = 'Contact Me',
					formAction = '#',
					formMethod = 'get',
					textOnLeft = true
				}: IProps) => {
	// The textOnLeft boolean prop can be used to display either the text on left or right side of the image.

	return (
		<Container>
			<TwoColumn>
				<ImageColumn>
					<Image imageSrc={EmailIllustrationSrc} />
				</ImageColumn>
				<TextColumn textOnLeft={textOnLeft}>
					<TextContent>
						{subheading && <Subheading>{subheading}</Subheading>}
						<Heading>{heading}</Heading>
						<Description>{description}</Description>
						<Form action={formAction} method={formMethod}>
							<Input type="email" name="email" placeholder="Your Email Address" />
							<SubmitButton type="submit">{submitButtonText}</SubmitButton>
						</Form>
					</TextContent>
				</TextColumn>
			</TwoColumn>
		</Container>
	);
};
