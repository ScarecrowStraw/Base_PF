if (self.CavalryLogger) { CavalryLogger.start_js(["Z50F\/PB"]); }

__d("CometAIProductTagSuggestionsQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4198171616930399"}),null);
__d("CometAIProductTagSuggestionsQuery.graphql",["CometAIProductTagSuggestionsQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:null,kind:"LocalArgument",name:"max_suggestions_per_photo"},c={defaultValue:null,kind:"LocalArgument",name:"photo_ids"},d=[{kind:"Variable",name:"max_suggestions_per_photo",variableName:"max_suggestions_per_photo"},{kind:"Variable",name:"photo_ids",variableName:"photo_ids"}],e={alias:null,args:null,kind:"ScalarField",name:"photo_id",storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"top_left",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"bottom_right",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"center_x",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"center_y",storageKey:null},j={alias:null,args:null,kind:"ScalarField",name:"score",storageKey:null},k={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},l={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},m={alias:null,args:[{kind:"Literal",name:"height",value:64},{kind:"Literal",name:"sizing",value:"cover-fill-cropped"},{kind:"Literal",name:"width",value:64}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null}],storageKey:'image(height:64,sizing:"cover-fill-cropped",width:64)'},n={alias:null,args:null,concreteType:"CurrencyAmount",kind:"LinkedField",name:"listing_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_amount",storageKey:null}],storageKey:null},o={alias:null,args:null,concreteType:"CatalogItemUnitPrice",kind:"LinkedField",name:"per_unit_price",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"formatted_text",storageKey:null}],storageKey:null},p={alias:null,args:null,kind:"ScalarField",name:"confidence",storageKey:null};return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"CometAIProductTagSuggestionsQuery",selections:[{alias:null,args:d,concreteType:"ProductTagAISuggestionInfo",kind:"LinkedField",name:"product_tag_suggestions",plural:!0,selections:[e,{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"suggestions",plural:!0,selections:[f,g,h,i,j,{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[k,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[m],storageKey:null},n,o],storageKey:null},j],storageKey:null},p],storageKey:null}],storageKey:null}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"CometAIProductTagSuggestionsQuery",selections:[{alias:null,args:d,concreteType:"ProductTagAISuggestionInfo",kind:"LinkedField",name:"product_tag_suggestions",plural:!0,selections:[e,{alias:null,args:null,concreteType:"ProductTagProductBox",kind:"LinkedField",name:"suggestions",plural:!0,selections:[f,g,h,i,j,{alias:null,args:null,concreteType:"ProductTagSuggestedProduct",kind:"LinkedField",name:"products",plural:!0,selections:[{alias:null,args:null,concreteType:"ProductItem",kind:"LinkedField",name:"product_item",plural:!1,selections:[k,l,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"primary_listing_photo",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},m,k],storageKey:null},n,o],storageKey:null},j],storageKey:null},p],storageKey:null}],storageKey:null}]},params:{id:b("CometAIProductTagSuggestionsQuery_facebookRelayOperation"),metadata:{},name:"CometAIProductTagSuggestionsQuery",operationKind:"query",text:null}}}();e.exports=a}),null);
__d("CometAIProductTagSuggestionsUtil_photo.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"InlineDataFragment",name:"CometAIProductTagSuggestionsUtil_photo"};e.exports=a}),null);
__d("CometAIProductTagSuggestionsQuery.react",["CometAIProductTagSuggestionsQuery.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;a=h!==void 0?h:h=b("CometAIProductTagSuggestionsQuery.graphql");g["default"]=a}),98);
__d("ProductTagConfidence",["$InternalEnum"],(function(a,b,c,d,e,f){a=b("$InternalEnum").Mirrored(["HIGH","LOW","VERY_HIGH","VERY_LOW"]);c=a;f["default"]=c}),66);
__d("ProductTagConfidenceUtils.facebook",["$InternalEnumUtils","ProductTagConfidence"],(function(a,b,c,d,e,f,g){a=d("$InternalEnumUtils").createToJSEnum(c("ProductTagConfidence"));b=d("$InternalEnumUtils").createFromJSEnum(c("ProductTagConfidence"));g.toJSEnum=a;g.fromJSEnum=b}),98);
__d("SharedAIProductTagUtils",["ProductTagConfidenceUtils.facebook"],(function(a,b,c,d,e,f,g){"use strict";var h=5;function a(a){var b=new Map();a.product_tag_suggestions.map(function(a){var c=a.photo_id;a=a.suggestions;if(c==null||a==null)return;var e=[],f=[];a.map(function(a){a=(a=a)!=null?a:{};var b=a.bottom_right,c=a.center_x,g=a.center_y,h=a.confidence,i=a.products,j=a.score;a=a.top_left;if(c==null||g==null||j==null)return;c=c*100;g=g*100;i=i==null?void 0:i[0];var k=i==null?void 0:i.score;h=d("ProductTagConfidenceUtils.facebook").toJSEnum(h);i=(i=i==null?void 0:i.product_item)!=null?i:{};var l=i.id,m=i.listing_price,n=i.name,o=i.per_unit_price;i=i.primary_listing_photo;b={boundingBoxJSON:JSON.stringify({bottomRight:b,topLeft:a}),boxScore:j,confidence:h,productID:l,productScore:k};if((h==="VERY_HIGH"||h==="HIGH")&&e.length===0){if(l==null||n==null)return null;j={id:l,image_uri:i==null?void 0:(a=i.image)==null?void 0:a.uri,metadata:{product_tag_type:"AI_HIGH_CONFIDENCE"},name:n,product_per_unit_price:o==null?void 0:o.formatted_text,product_price:m==null?void 0:m.formatted_amount};k=babelHelpers["extends"]({},b,{source:"AI_suggested",taggee:j,x:c,y:g});e.push(k)}else h==="LOW"&&f.push(babelHelpers["extends"]({},b,{x:c,y:g}))});b.set(c,{knownSuggestions:e,unknownSuggestions:f})});return b}function b(a,b,c,d){return a>=c-h&&a<=c+h&&b>=d-h&&b<=d+h}g.USER_TAGGING_TOLERANCE=h;g.processAIProductTagSuggestionsQueryResponse=a;g.isPointNearbyPoint=b}),98);
__d("CometAIProductTagSuggestionsUtil.react",["CometAIProductTagSuggestionsUtil_photo.graphql","CometRelay","SharedAIProductTagUtils"],(function(a,b,c,d,e,f,g){"use strict";var h,i=h!==void 0?h:h=b("CometAIProductTagSuggestionsUtil_photo.graphql");function j(a,b){return a.productID===b.productID||d("SharedAIProductTagUtils").isPointNearbyPoint(a.x,a.y,b.x,b.y)}function k(a){return(a=a==null?void 0:(a=a.photo_product_tags)==null?void 0:a.map(function(a){var b;b=(b=a.product_item)==null?void 0:b.id;a=a.xy_location;var c=a==null?void 0:a.x;a=a==null?void 0:a.y;return c===void 0||c===null||a===void 0||a===null||b===null||b===void 0?null:{productID:b,x:c,y:a}}).filter(Boolean))!=null?a:[]}function a(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);if(!b)return[];a=b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b});return a}function c(a,b){a=d("CometRelay").readInlineData(i,a);b=b==null?void 0:b.get((b=a==null?void 0:a.id)!=null?b:"");var c=k(a);if(!b)return[];a=b==null?void 0:b.filter(function(a){var b=(c==null?void 0:c.filter(function(b){return j({productID:a.productID,x:a.x,y:a.y},b)}).length)>0;return!b});return a}function e(a){return!a}g.getUntaggedKnownTags=a;g.getUntaggedUnknownTags=c;g.canUsePretagExperience=e}),98);
__d("HoveredProductIDContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({hoveredProductID:null,setHoveredProductID:c("emptyFunction")});g["default"]=b}),98);
__d("CometTime",["unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";function a(a){return new Date(a*1e3)}function b(a){var b=a.getTime();if(Number.isNaN(b))throw c("unrecoverableViolation")("Tried to get time, but got NaN: "+a.toString(),"comet_ui");return Math.floor(b/1e3)}g.fromSeconds=a;g.toSeconds=b}),98);
__d("composerScheduledPostsTransform",["CometTime"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,c,e){a=a.scheduledPostDate;a=(a=a)!=null?a:e==null?void 0:e.scheduledPublishTime;if(a==null)return c(b);c(babelHelpers["extends"]({},b,{unpublished_content_data:{scheduled_publish_time:d("CometTime").toSeconds(a),unpublished_content_type:"SCHEDULED"}}))}g["default"]=a}),98);
__d("DiscussionPostAttachment.react",["fbt","CometColumn.react","CometColumnItem.react","TetraText.react","react","stylex"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={columnPadding:{paddingTop:"aodizinl",paddingEnd:"gl4o1x5y",paddingBottom:"ofv0k9yr",paddingStart:"lt9micmv"},overlay:{backgroundColor:"d6rk862h",borderTopStartRadius:"jk6sbkaj",borderTopEndRadius:"kdgqqoy6",borderBottomEndRadius:"ihh4hy1g",borderBottomStartRadius:"qttc61fc",paddingTop:"cxgpxx05",paddingEnd:"dflh9lhu",paddingBottom:"sj5x9vvc",paddingStart:"scb9dxdr"}};function a(a){var b={backgroundImage:"linear-gradient(rgb(180, 113, 255), rgb(94, 24, 242))"};return i.jsx("div",{style:b,children:i.jsxs(c("CometColumn.react"),{align:"start",spacing:12,verticalAlign:"center",xstyle:[j.columnPadding,a.additionalPaddingXStyle],children:[i.jsx(c("CometColumnItem.react"),{children:i.jsx("div",{className:c("stylex")(j.overlay),children:i.jsx(c("TetraText.react"),{align:"start",color:"primaryOnMedia",type:"meta1",children:h._(/*FBT_CALL*/"Discussion"/*FBT_CALL*/)})})}),i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("TetraText.react"),{align:"start",color:"primaryOnMedia",type:"headlineEmphasized1",children:a.prompt})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometComposerDiscussionPostAttachmentArea.react",["DiscussionPostAttachment.react","react","stylex","withComposerViewStatePart"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i={additionalPadding:{paddingEnd:"ftjopcgk"},container:{width:"k4urcfbm"}};function a(a){a=(a=a.discussionMetadata)==null?void 0:a.prompt;return a!=null?h.jsx("div",{className:c("stylex")(i.container),children:h.jsx(c("DiscussionPostAttachment.react"),{additionalPaddingXStyle:i.additionalPadding,prompt:a})}):null}b=c("withComposerViewStatePart")(a,function(a){return{discussionMetadata:a.discussionMetadata}});g["default"]=b}),98);
__d("composerPaidContentTransform",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("OtpInteractionFalcoEvent").__setRef("composerPaidContentTransform");function a(a,b,c){var d,e,f,g,i;d=(d=a.paidContent)==null?void 0:d.packageDescription;e=(e=a.paidContent)==null?void 0:e.packageName;f=(f=a.paidContent)==null?void 0:f.packagePrice;g=(g=(g=a.paidContent)==null?void 0:g.previewVideoID)!=null?g:null;i=(i=(i=a.paidContent)==null?void 0:i.gatedText)!=null?i:null;var j=void 0;d!=null&&e!=null&&f!=null&&(j={package_description:d,package_name:e,package_price:f},g!=null&&(j=babelHelpers["extends"]({},j,{preview_video_id:g})),i!=null&&(j=babelHelpers["extends"]({},j,{gated_text:i})));if(a.paidContent!=null){d=babelHelpers["extends"]({},b,{paid_content:{paid_content_package_id:a.paidContent.packageID,paid_content_package_meta:j}});h.onReady(function(a){return a.log(function(){return{action:"click",action_target:"create_post_button",surface:"composer"}})});c(d)}else c(b)}g["default"]=a}),98);
__d("composerGetWhatsAppMessagesTransform",["mediaAttachmentAreaTransform"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b,d){if(a.isGetWhatsAppMessagePost===!0){var e=babelHelpers["extends"]({},b,{call_to_action_data:babelHelpers["extends"]({},b.call_to_action_data,{is_cta_share_post:!0,type:"WHATSAPP_MESSAGE"})});return a.mediaAttachments!=null?c("mediaAttachmentAreaTransform")(a,e,d):d(e)}return d(b)}g["default"]=a}),98);
__d("CometPhotoTaggingConstants",[],(function(a,b,c,d,e,f){"use strict";a=3;b=1;c=94;f.BOX_BORDER_SIZE=a;f.INITIAL_PHOTO_RENDER_SCALE=b;f.TAGGING_BOX_SIZE=c}),66);
__d("CometPhotoViewerViewStateContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({highlightedKnownAITagID:null,isProductTagging:!1,knownAITags:null,tagModeEnabled:!1,unknownAITags:null});g["default"]=b}),98);
__d("CometPhotoViewerViewStateDispatcherContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("composerWoodhengeSupportTransform",["Banzai","CometComposerFooterAttachmentPluginTypes"],(function(a,b,c,d,e,f,g){"use strict";var h="logger:WoodhengeClientLoggerConfig";function a(a,b,d){var e;if(a.woodhengeCTAAdded!==!0)d(b);else if(((e=a.footerAttachmentArea)==null?void 0:e.activeFooterAttachmentType)===c("CometComposerFooterAttachmentPluginTypes").WOODHENGE_SUPPORT)d(babelHelpers["extends"]({},b,{fan_funding_promotion_metadata:a.fanFundingPromotionMetadata}));else{c("Banzai").post(h,{creator_page_id:(e=a.fanFundingPromotionMetadata)==null?void 0:e.page_id,name:"funding_feed_composer_cta_attach"});d(babelHelpers["extends"]({},b,{fan_funding_promotion_metadata:a.fanFundingPromotionMetadata}))}}g["default"]=a}),98);
__d("LiveShoppingViewerFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1743808");c=b("FalcoLoggerInternal").create("live_shopping_viewer",a);e.exports=c}),null);
__d("OtpInteractionFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1107");c=b("FalcoLoggerInternal").create("otp_interaction",a);e.exports=c}),null);
__d("ProductTaggingAiEvaluationFalcoEvent",["FalcoLoggerInternal","getFalcoLogPolicy_DO_NOT_USE"],(function(a,b,c,d,e,f){"use strict";a=b("getFalcoLogPolicy_DO_NOT_USE")("1744233");c=b("FalcoLoggerInternal").create("product_tagging_ai_evaluation",a);e.exports=c}),null);
__d("XCometPageShopsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{vanity}/shop/",Object.freeze({ref:"",preview:!1}),void 0);b=a;g["default"]=b}),98);
__d("XCometProfessionalDashboardScheduledPostsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/{idorvanity}/professional_dashboard/scheduled_posts/",Object.freeze({from_composer_toast:!1}),void 0);b=a;g["default"]=b}),98);