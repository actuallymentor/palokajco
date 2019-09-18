const download = url => {

  const a = document.createElement( 'a' )
  a.href = url
  a.style.display = "none"
  document.body.appendChild( a )
  a.click()
  document.body.removeChild( a )

}

export default function manageContactCard(  ) {

	// Check for card request in query
	const requested = location.search.includes( 'card' )
	if( !requested ) return false

	// If cfounc hide string and download
	window.history.pushState( {}, "",  "/" + window.location.href.substring(window.location.href.lastIndexOf('/') + 1).split("?")[0])
	download( '/assets/mentor-palokaj.vcf' )
	return alert( 'Contact card downloaded, please click the download to import it.' )
}