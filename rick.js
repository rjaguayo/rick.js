////////////////////////////////////////////////////////////
// BEGIN Extension Methods
////////////////////////////////////////////////////////////

// STRING

if (!String.prototype.contains) {
    // ReSharper disable once NativeTypePrototypeExtending
    String.prototype.contains = function (input, ignoreCase) {
        return ignoreCase
            ? ~this.toLowerCase().indexOf(input.toLowerCase())
            : ~this.indexOf(input);
    };
}

if (!String.prototype.replaceAll) {
    // ReSharper disable once NativeTypePrototypeExtending
    String.prototype.replaceAll = function (search, replacement) {
        var target = this;
        return target.replace(new RegExp(search, 'g'), replacement);
    };
}

if (!String.prototype.isNullOrWhiteSpace) {
    // ReSharper disable once NativeTypePrototypeExtending
    String.prototype.isNullOrWhiteSpace = function () {
        return !this || !this.trim();
    }
}


// First, checks if it isn't implemented yet.
if (!String.prototype.format) {
    // ReSharper disable once NativeTypePrototypeExtending
    String.prototype.format = function () {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
              ? args[number]
              : match
            ;
        });
    };
}

// ARRAY

Array.prototype.popAll = function () {
    this.splice(0, this.length);
};

Array.prototype.contains = function (input) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === input) {
            return true;
        }
    }
    return false;
};

Array.prototype.max = function () {
    return Math.max.apply(null, this);
};

// DATE

Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Date.prototype.yyyymmdd = function (separator) {
    var yyyy = this.getFullYear().toString();
    var mm = (this.getMonth() + 1).toString(); // getMonth() is zero-based
    var dd = this.getDate().toString();
    return yyyy + separator + (mm[1] ? mm : "0" + mm[0]) + separator + (dd[1] ? dd : "0" + dd[0]); // padding
};

////////////////////////////////////////////////////////////
// END Extension Methods
////////////////////////////////////////////////////////////