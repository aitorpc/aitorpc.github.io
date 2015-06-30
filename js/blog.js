$(function() {
 
    Parse.$ = jQuery;
 	
    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("v1vHDkCWnh5wAwb6h0not28sb8pVbPk3692Ph9NU", "qNJ4FJXBCmKwLvstgn9iCMgivsRQL0ppbavlx8ue");
 
 	/* Test inicial
    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });
 	*/

 	var Blog = Parse.Object.extend("Blog");

 	var Blogs = Parse.Collection.extend({
    	model: Blog
	});


	var BlogsView =  Parse.View.extend({
	    template: Handlebars.compile($('#blogs-tpl').html()),
	    render: function(){ 
	        var collection = { blog: this.collection.toJSON() };
	        this.$el.html(this.template(collection));
	    }
	});

	var blogs = new Blogs();

	blogs.fetch({
    	success: function(blogs) {
		    var blogsView = new BlogsView({ collection: blogs });
		    blogsView.render();
		    $('.main-container').html(blogsView.el);
		},
    	error: function(blogs, error) {
        	console.log(error);
    	}
	});
});

