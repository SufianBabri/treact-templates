import tw from 'twin.macro';

/* framer-motion and useInView here are used to animate the sections in when we reach them in the viewport
 */
import {motion} from 'framer-motion';
// @ts-ignore
import useInView from 'use-in-view';

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

type DirectionType = 'left' | 'right' | 'top' | 'bottom';

interface IRevealProps {
	disabled?: boolean;
	children: JSX.Element[];
}

function AnimationReveal({disabled, children}: IRevealProps) {
	if (disabled) {
		return <>{children}</>;
	}

	if (!Array.isArray(children)) children = [children];

	const directions: DirectionType[] = ['left', 'right'];
	const childrenWithAnimation = children.map((child, i) => {
		return (
			<AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
				{child}
			</AnimatedSlideInComponent>
		);
	});
	return <>{childrenWithAnimation}</>;
}

interface IComponentProps {
	direction: DirectionType;
	offset?: number;
	children: JSX.Element;
}

function AnimatedSlideInComponent({direction = 'left', offset = 30, children}: IComponentProps) {
	const [ref, inView] = useInView(30);

	const x = {
		target: '0%',
		initial: direction === 'left' ? '-150%' : '150%'
	};

	return (
		<motion.section
			initial={{x: x.initial}}
			animate={{
				x: inView && x.target,
				transitionEnd: {
					x: inView && 0
				}
			}}
			transition={{type: 'spring', damping: 20}}
			ref={ref}
		>
			{children}
		</motion.section>
	);
}

interface IProps {
	children: JSX.Element[];
}

export default (props: IProps) => (
	<StyledDiv className="App">
		<AnimationReveal {...props} />
	</StyledDiv>
);
