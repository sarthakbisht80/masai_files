var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var CourseSubscrption = /** @class */ (function () {
    function CourseSubscrption() {
    }
    return CourseSubscrption;
}());
var BasicSubcription = /** @class */ (function (_super) {
    __extends(BasicSubcription, _super);
    function BasicSubcription() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BasicSubcription.prototype.getCost = function () {
        return 499;
    };
    BasicSubcription.prototype.getFeatures = function () {
        return ["Access to all basic Courses"];
    };
    return BasicSubcription;
}(CourseSubscrption));
//decorator
var SubscriptionDecorator = /** @class */ (function (_super) {
    __extends(SubscriptionDecorator, _super);
    function SubscriptionDecorator(subscription) {
        var _this = _super.call(this) || this;
        _this.subscription = subscription;
        return _this;
    }
    return SubscriptionDecorator;
}(CourseSubscrption));
//certificate addon
var CertificateAddon = /** @class */ (function (_super) {
    __extends(CertificateAddon, _super);
    function CertificateAddon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CertificateAddon.prototype.getCost = function () {
        return this.subscription.getCost() + 200;
    };
    CertificateAddon.prototype.getFeatures = function () {
        return __spreadArray(__spreadArray([], this.subscription.getFeatures(), true), ["Official certificate of Completion"], false);
    };
    return CertificateAddon;
}(SubscriptionDecorator));
var DoubtSupportAddon = /** @class */ (function (_super) {
    __extends(DoubtSupportAddon, _super);
    function DoubtSupportAddon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DoubtSupportAddon.prototype.getCost = function () {
        return this.subscription.getCost() + 300;
    };
    DoubtSupportAddon.prototype.getFeatures = function () {
        return __spreadArray(__spreadArray([], this.subscription.getFeatures(), true), ["24*7 Doubt support via chat"], false);
    };
    return DoubtSupportAddon;
}(SubscriptionDecorator));
var MentorAccessAdon = /** @class */ (function (_super) {
    __extends(MentorAccessAdon, _super);
    function MentorAccessAdon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MentorAccessAdon.prototype.getCost = function () {
        return this.subscription.getCost() + 500;
    };
    MentorAccessAdon.prototype.getFeatures = function () {
        return __spreadArray(__spreadArray([], this.subscription.getFeatures(), true), ["Weeekly 1on1 mentor Sessions"], false);
    };
    return MentorAccessAdon;
}(SubscriptionDecorator));
var PromotionalBundle = /** @class */ (function (_super) {
    __extends(PromotionalBundle, _super);
    function PromotionalBundle() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PromotionalBundle.prototype.getCost = function () {
        var totalCost = this.subscription.getCost();
        if (this.hasDoubtSupport() && this.hasMentorAccess()) {
            totalCost = totalCost * 0.85;
        }
        return totalCost;
    };
    PromotionalBundle.prototype.getFeatures = function () {
        return this.subscription.getFeatures();
    };
    PromotionalBundle.prototype.hasDoubtSupport = function () {
        var current = this.subscription;
        while (current instanceof SubscriptionDecorator) {
            if (current instanceof DoubtSupportAddon)
                return true;
            current = current.subscription;
        }
        return false;
    };
    PromotionalBundle.prototype.hasMentorAccess = function () {
        var current = this.subscription;
        while (current instanceof SubscriptionDecorator) {
            if (current instanceof MentorAccessAdon)
                return true;
            current = current.subscription;
        }
        return false;
    };
    return PromotionalBundle;
}(SubscriptionDecorator));
var sub1 = new CertificateAddon(new BasicSubcription());
console.log("Cost", sub1.getCost());
console.log("features", sub1.getFeatures());
var sub2 = new PromotionalBundle(new MentorAccessAdon(new DoubtSupportAddon(new CertificateAddon(new BasicSubcription()))));
console.log("cost", sub2.getCost());
console.log("Festures", sub2.getFeatures());
