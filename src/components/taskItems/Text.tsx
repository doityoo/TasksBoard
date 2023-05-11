import React from 'react';
import './../../styles/text.css';

interface TextProps {
	// completec?: boolean;
	children: React.ReactNode;
}

const Text = ({ children }: TextProps) => {
	return (
		<div>
			{children}
		</div>
	);
};

export default Text;
