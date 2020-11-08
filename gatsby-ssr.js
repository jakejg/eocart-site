export {wrapRootElement} from './gatsby-browser';
import React from 'react'
import { withPrefix } from 'gatsby'

export const onRenderBody = ({ setPostBodyComponents }) => {
	setPostBodyComponents([
		<script src={withPrefix('js/replace.js')} key="replaceURL" />
	])
}

export const onPreRenderHTML = ({ getPostBodyComponents, replacePostBodyComponents }) => {
	let postBodyComponents = getPostBodyComponents()
	postBodyComponents.sort((a, b) => {
		if (a.key === 'replaceURL') {
			return 1
		}
		if (b.key === 'replaceURL') {
			return -1
		}
		return 0
	})
	replacePostBodyComponents(postBodyComponents)
}
