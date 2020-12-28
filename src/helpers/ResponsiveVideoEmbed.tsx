/* A simple iframe wrapper that makes 16:9 responsive embed */

interface IProps {
	url: string;
	background: string;
	className?: string;
}

const ResponsiveVideoEmbed = ({url, background = 'black', className = 'video'}: IProps) => {
	return (
		<div
			className={className}
			style={{
				position: 'relative',
				background: background,
				paddingBottom: '56.25%' /* 16:9 */,
				paddingTop: 25,
				height: 0
			}}
		>
			<iframe
				title="Embeded Video"
				style={{
					position: 'absolute',
					top: 0,
					left: 0,
					width: '100%',
					height: '100%'
				}}
				src={url}
				frameBorder="0"
			/>
		</div>
	);
};

export default ResponsiveVideoEmbed;