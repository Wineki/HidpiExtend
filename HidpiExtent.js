(function(prototype) {
	prototype.getContextHidpi = (function(_super) {
		return function(type) {
			var backingStore, ratio,
				context = _super.call(this, type);

			if (type === '2d') {

				backingStore = context.backingStorePixelRatio ||
							context.webkitBackingStorePixelRatio ||
							context.mozBackingStorePixelRatio ||
							context.msBackingStorePixelRatio ||
							context.oBackingStorePixelRatio || 1;

				ratio = (window.devicePixelRatio || 1) / backingStore;
				if (ratio > 1 && !this._isScale) {
					this.style.height = this.height + 'px';
					this.style.width = this.width + 'px';
					this.width *= ratio;
					this.height *= ratio;
					context.scale(ratio, ratio);
					this._isScale = 1;
				}
			}

			return context;
		};
	})(prototype.getContext);
})(HTMLCanvasElement.prototype);
