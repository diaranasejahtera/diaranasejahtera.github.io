(function($){

	'use strict';

	TF.Models.Utility = Backbone.Model.extend({
		defaults: {
			current_edit_module: '',
			gutterClass: '',
			drop_module_text: '',
			activeStyleSelector: '.module-text-title',
			activeSelectorKey: 'tf_module_text_container',
		},

		sync: function( method, model, options ) {
			var args, fallback;

			// Overload the read method so model.fetch() functions correctly.
			if ( 'read' === method ) {
				options = options || {};
				options.context = this;
				options.data = _.extend( options.data || {}, {
					action:  'tf_builder_read_data',
					type: 'utility',
					template_id: _tf_app.post_id,
					nonce: _tf_app.nonce
				});

				// Clone the args so manipulation is non-destructive.
				args = _.clone( this.args );

				options.data.query = args;
				return wp.ajax.send( options );

			// Otherwise, fall back to Backbone.sync()
			} else {
				return Backbone.sync.apply( this, arguments );
			}
		}
	});
	
})(jQuery);