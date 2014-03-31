angular.module('bs.common.models').factory('Comment', function($resource, BASE_URL, Cacher) {
  var Comment = $resource(BASE_URL + '/api/v1/rest/comments/:id', { id: '@_id' });
  Comment.prototype.getAuthor = function() {
    return Cacher.userCache.get(this.author);
  };
  return Comment;
});