/**
 * Created by Ramy Eldesoky on 12/13/2015.
 */


var Transform = require('stream').Transform;

function ReplaceTransformer(matcher, replace, opts) {
	if (!(this instanceof ReplaceTransformer)) {
		return new ReplaceTransformer(matcher, replace, opts);
	}
	Transform.call(this, opts);
	this.matcher = matcher || ';';
	this.replace = replace || '\n';
	this.buffer = '';
}
ReplaceTransformer.prototype = Object.create(Transform.prototype);

ReplaceTransformer.prototype._transform = function (chunk, encoding, cb) {
	var pieces = (this.buffer + chunk).split(this.matcher);
	this.buffer = pieces.pop();
	this.push(pieces.join(this.replace));
	cb();
};

ReplaceTransformer.prototype._flush = function (cb) {
	this.push(this.buffer);
	cb();
};

module.exports = ReplaceTransformer;