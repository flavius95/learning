/* Get 'home' page */
module.exports.homelist = function(req,res) {
	res.render('locations-list', {
		title: 'Loc8r - find a place to work with wifi',
		pageHeader: {
			title: 'Loc8r',
			strapline: 'Find places to work with wifi near you!'
		},
		sidebar: 'This will help yout to finish the work with a great cup of coffee.',
		locations: [{
			name: 'Viviani',
			address: '4, Mendeleev Street, Readingm RG6 1PS',
			rating: 4,
			facilities: ['Hot drinks', 'Food', 'Victor', 'Premium wifi'],
			distance: '200m'
		},{
			name: 'Coffee Bar',
			address: '4, Mendeleev Street, Readingm RG6 1PS',
			rating: 3,
			facilities: ['Hot drinks', 'Food', 'Premium wifi'],
			distance: '150m'
		}]
	});
};

/* Get 'Location info' page*/
module.exports.locationInfo = function(req,res) {
	res.render('location-info', {
		title: 'Viviani',
		pageHeader: {title: 'Viviani'},
		sidebar: {
			context: 'Is on loc8r because it has accessible wifi and space to sit down and work.',
			callToAction: 'If you have been and you like it - or if you do not - please leave a review to help other people like you.'
		},
		location: {
			name: 'Viviani',
			address: '4, Mendeleev Street, Readingm RG6 1PS',
			rating: 5,
			facilities: ['Hot drinks', 'Food', 'Victor', 'Premium wifi'],
			coords: {lat:51.455041, lng: -0.9690884},
			openingTimes: [{
				days: 'Monday - Friday',
				opening: '7:00am',
				closing: '7:00pm',
				closed: false
			}, {
				days: 'Saturday',
				opening: '8:00am',
				closing: '5:00pm',
				closed: false
			}, {
				days: 'Sunday',
				closed: true
			}],
			reviews: [{
				author: 'Flavius Ilina',
				rating: 5,
				timestamp: '10 January 2019',
				reviewText: 'It was a pleasure to stay here.'
			}, {
				author: 'Loredana Antalfi',
				rating: 3,
				timestamp: '10 January 2019',
				reviewText: 'Not so cosy as expected.'
			}]
		}
	});
};

/* Get 'Add review' page */
module.exports.addReview = function(req,res) {
	res.render('location-review-form', {title: 'Add review' });
};