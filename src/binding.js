function tie(key){
  var that = this
    , placeholder = false
    , i = 1, length, args;
  length = arguments.length;
  if(length < 2)return ctx(that[key], that);
  args = Array(length - 1)
  while(length > i)if((args[i - 1] = arguments[i++]) === _)placeholder = true;
  return createPartialApplication(that[key], args, length, placeholder, true, that);
}
function by(that){
  var fn = this
    , placeholder = false
    , length = arguments.length
    , i = 1, args;
  if(length < 2)return ctx(fn, that);
  args = Array(length - 1);
  while(length > i)if((args[i - 1] = arguments[i++]) === _)placeholder = true;
  return createPartialApplication(fn, args, length, placeholder, true, that);
}
$define(PROTO, FUNCTION, {
  tie: tie,
  /**
   * Partial apply.
   * Alternatives:
   * http://sugarjs.com/api/Function/fill
   * http://underscorejs.org/#partial
   * http://mootools.net/docs/core/Types/Function#Function:pass
   * http://fitzgen.github.io/wu.js/#wu-partial
   */
  part: part,
  by: by,
  /**
   * function -> method
   * Alternatives:
   * http://api.prototypejs.org/language/Function/prototype/methodize/
   */
  methodize: methodize
});
$define(PROTO, ARRAY, {tie: tie});
$define(PROTO, REGEXP, {tie: tie});
$define(STATIC, OBJECT, {
  /**
   * Alternatives:
   * http://www.2ality.com/2013/06/auto-binding.html
   * http://livescript.net/#property-access -> foo~bar
   * http://lodash.com/docs#bindKey
   */
  tie: unbind(tie),
  useTie: part.call($define, PROTO, OBJECT, {tie: tie})
});
$define(STATIC, FUNCTION, {
  part: unbind(part),
  by: unbind(by),
  tie: unbind(tie)
});