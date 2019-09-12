import React from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';

function Map() {
	const Map = ReactMapboxGl({
		accessToken: process.env.REACT_APP_PUBLIC_MAPBOX_KEY,
	});

	return (
		<Map
			// eslint-disable-next-line react/style-prop-object
			style="mapbox://styles/egarrett94/ck0g5ngs20dg31cti1yb2gx9x"
			containerStyle={{
				height: '100vh',
				width: '100vw',
			}}
		>
			<Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
				<Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
			</Layer>
		</Map>
	);
}

export default Map;
