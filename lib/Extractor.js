'use strict';

// -----------------------------------------------------------------------------

/**
 * Class for extracting relevant content based on regex
 */
class Extractor
{
	
	/**
	 * constructor
	 * 
	 * @param {object} re
	 */
	constructor( re )
	{
		
		if ( ! re )
		{
			throw new Error('re required');
		}

		// -------------------------------------------------------------------------
		
		this.re = re;
		
	}
	// constructor()
	
	
	
	/**
	 * @return {RegExp}
	 */
	get_regex( re )
	{
		
		return ( Array.isArray( re ) ) ? new RegExp( ...re ) : re;
	
	}
	// get_regex()
	
	
	
	/**
	 * @return {string}
	 */
	find( re, content )
	{
						
		if ( ! re || ! content )
		{
			return;
		}

		// -------------------------------------------------------------------------
		
		const regex = this.get_regex( re );
		
		if ( ! ( regex instanceof RegExp ) )
		{
			return;
		}

		// -------------------------------------------------------------------------
		
		let match;
		
		if ( ( match = regex.exec( content ) ) !== null )
		{
			if ( match[1] )
			{
				return match[1];
			}
		}
	
	}
	// find()
	
	

	/**
	 * @return {string|undefined}
	 */
	extract( content, from_what = '' )
	{
		
		if ( ! from_what )
		{
			for ( from_what of Object.keys( this.re ) )
			{
				const res = this.find( this.re[ from_what ], content );
				
				if ( res )
				{
					return res;
				}			
			}
		}
		else
		{
			if ( this.re.hasOwnProperty( from_what ) )
			{
				return this.find( this.re[ from_what ], content );
			}
		}
		
	}
	// extract()



	/**
	 * @return {string|undefined}
	 */
	from_html( content )
	{
		
		return this.extract( content, 'html' );
		
	}
	// from_html()



	/**
	 * @return {string|undefined}
	 */
	from_markdown( content )
	{
		
		return this.extract( content, 'markdown' );
		
	}
	// from_markdown()



	/**
	 * alias of from_markdown()
	 *
	 * @return {string|undefined}
	 */
	from_md( ...args )
	{
		
		return this.from_markdown( ...args );
		
	}
	// from_md()



	/**
	 * @return {string|undefined}
	 */
	from_any( ...args )
	{
		
		return this.extract( ...args );
		
	}
	// from_any()
	
}
// class Extractor

// -----------------------------------------------------------------------------

module.exports = re => {

	const cls = new Extractor( re );
	const out = {};

	for ( const fn of ['from_html', 'from_markdown', 'from_md', 'from_any'] )
	{
		out[ fn ] = ( ...args ) => cls[ fn ]( ...args );
	}

	// ---------------------------------------------------------------------------
	
	return out;
	
};
