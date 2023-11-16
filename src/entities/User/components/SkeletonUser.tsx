import ContentLoader from "react-content-loader"

export const SkeletonUser = () => (
	<ContentLoader
		height={40}
		speed={1}
		backgroundColor={'#d9d9d9'}
		foregroundColor={'#808080'}
		viewBox="0 0 380 70"
	>
		{/* Only SVG shapes */}
		<rect x="130" y="17" rx="4" ry="4" width="250" height="13" />
		<rect x="180" y="40" rx="3" ry="3" width="200" height="10" />
	</ContentLoader>
)


