import React, { Fragment } from 'react';
import './../../styles/sectionLayout.css';

const SectionLayout = (props: any) => {
	return (
		<Fragment>
			<div className='section'>{props.children}</div>
		</Fragment>
	);
};

export default SectionLayout;
