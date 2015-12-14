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

ReplaceTransformer.prototype._transform = function (chunk, encoding, next) {
	var pieces = (this.buffer + chunk).split(this.matcher);
    if(pieces.length>1){
        this.push(pieces.join(this.replace));
        this.buffer = '';
    }else{
        this.buffer = pieces.pop();
    }
	next();
};

ReplaceTransformer.prototype._flush = function (next) {
	this.push(this.buffer);
	next();
};

module.exports = ReplaceTransformer;