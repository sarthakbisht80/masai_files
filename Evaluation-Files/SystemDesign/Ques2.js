//blog class
var Blog = /** @class */ (function () {
    function Blog() {
        this.subscribers = [];
    }
    Blog.prototype.subscribe = function (subscriber) {
        this.subscribers.push(subscriber);
    };
    Blog.prototype.unsubscribe = function (subscriber) {
        this.subscribers = this.subscribers.filter(function (sub) { return sub !== subscriber; });
    };
    Blog.prototype.publish = function (postTitle) {
        for (var _i = 0, _a = this.subscribers; _i < _a.length; _i++) {
            var subscriber = _a[_i];
            subscriber.update(postTitle);
        }
    };
    return Blog;
}());
//Email Subscribver class
var EmailSubscriber = /** @class */ (function () {
    function EmailSubscriber() {
    }
    EmailSubscriber.prototype.update = function (postTitle) {
        console.log("Email : new blog post titiles ".concat(postTitle));
    };
    return EmailSubscriber;
}());
var SMSSubscriber = /** @class */ (function () {
    function SMSSubscriber() {
    }
    SMSSubscriber.prototype.update = function (postTitle) {
        console.log("SMS : New blog post titled ".concat(postTitle));
    };
    return SMSSubscriber;
}());
var blogObj = new Blog();
var emailSubscriberObbj = new EmailSubscriber();
var smssubscriberObj = new SMSSubscriber();
blogObj.subscribe(emailSubscriberObbj);
blogObj.subscribe(smssubscriberObj);
blogObj.publish("Design patterns in java script");
blogObj.publish("Oberserver pattern simplified");
