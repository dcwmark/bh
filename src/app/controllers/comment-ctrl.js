/**
 * src/app/controllers/comment-ctrl.js
**/

BH.app.controller('CommentCtrl', ['$scope', function($scope) {
    console.log('CommentCtrl');
    
    var self = this;
    
    self.mode = 'Submit';
    self.inComment = '';
    self.comments = [];
    self.modIndex = null;
    
    self.submit = function() {
        if (!self.inComment) {
            return;
        }
        if (self.mode === 'Submit') {
            self.comments.push({
                comment: self.inComment
            });
        } else {
            self.comments[self.modIndex].comment = self.inComment;
            self.mode = 'Submit';
            self.modIndex = null;
        }
        self.inComment = '';
        $scope.enterComment.$setPristine();
    };
    
    self.remove = function($index) {
        if (self.mode === 'Modify') {
            return;
        }
        self.comments.splice($index, 1);
        console.log('comments::', self.comments);
    };
    
    self.modify = function($index) {
        self.modIndex = $index;
        self.mode = 'Modify';
        self.inComment = self.comments[$index].comment;
    }
}]);
