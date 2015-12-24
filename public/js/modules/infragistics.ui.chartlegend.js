﻿/*!@license
	* Infragistics.Web.ClientUI Chart 15.2.20152.1027
	*
	* Copyright (c) 2011-2015 Infragistics Inc.
	*
	* http://www.infragistics.com/
	*
	* Depends on:
	* jquery-1.4.4.js
	* jquery.ui.core.js
	* jquery.ui.widget.js
	* infragistics.util.js
	* infragistics.dv.core.js
	* infragistics.chart_funnelchart.js
	*/
if(typeof jQuery!=="function"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igChartLegend",{options:{type:"legend",width:null,height:null,theme:"c"},css:{legend:"ui-corner-all ui-widget-content ui-chart-legend",legendItemsList:"ui-chart-legend-items-list",legendItem:"ui-chart-legend-item",legendItemBadge:"ui-chart-legend-item-badge",legendItemText:"ui-chart-legend-item-text"},events:{legendItemMouseLeftButtonDown:null,legendItemMouseLeftButtonUp:null,legendItemMouseEnter:null,legendItemMouseLeave:null},_create:function(){var legend,o=this.options,elem=this.element;if(o.type==="item"){legend=new $.ig.ItemLegend}else if(o.type==="scale"){legend=new $.ig.ScaleLegend;if(!o.width){o.width="100px"}if(!o.height){o.height="150px"}}else{legend=new $.ig.Legend}if(o.owner){this._owner=o.owner;o.owner=this._owner.options}this.legend=legend;legend.name(this.id());legend.legendItemsListStyle(this.css.legendItemsList);legend.legendItemStyle(this.css.legendItem);legend.legendItemBadgeStyle(this.css.legendItemBadge);legend.legendItemTextStyle(this.css.legendItemText);if(o.width){this._oldWidth=elem[0].style.width;elem.css("width",o.width)}if(o.height){this._oldHeight=elem[0].style.width;elem.css("height",o.height)}this._cssLegend=this.css.legend.replace("{0}",o.theme);elem.addClass(this._cssLegend);this._bindLegendEvents(legend);legend.provideContainer(elem)},_bindLegendEvents:function(legend){legend.legendItemMouseLeftButtonDown=$.ig.Delegate.prototype.combine(legend.legendItemMouseLeftButtonDown,jQuery.proxy(this._fireLegendItemMouseLeftButtonDown,this));legend.legendItemMouseLeftButtonUp=$.ig.Delegate.prototype.combine(legend.legendItemMouseLeftButtonUp,jQuery.proxy(this._fireLegendItemMouseLeftButtonUp,this));legend.legendItemMouseEnter=$.ig.Delegate.prototype.combine(legend.legendItemMouseEnter,jQuery.proxy(this._fireLegendItemMouseEnter,this));legend.legendItemMouseLeave=$.ig.Delegate.prototype.combine(legend.legendItemMouseLeave,jQuery.proxy(this._fireLegendItemMouseLeave,this))},_getLegendEvt:function(evtArgs){var e,brush,series=evtArgs.series?evtArgs.series():null,owner=this._owner;if(!owner){return null}e={legend:this.options,series:series!==null?owner.dvWidget._getSeriesOpt(evtArgs):owner.options,chart:owner,item:evtArgs._item};e[owner.dvWidget?owner.dvWidget._getWidgetName():owner.widgetName]=owner.options;brush=evtArgs.legendItem&&evtArgs.legendItem()!==null&&evtArgs.legendItem().content?evtArgs.legendItem().content():null;brush=brush&&brush.actualItemBrush?brush.actualItemBrush():null;if(brush===null){var intSeries=null;if(evtArgs.series&&evtArgs.series()!==null){intSeries=evtArgs.series()}if(intSeries!==null&&intSeries.hostedSeries&&intSeries.hostedSeries()!==null){intSeries=intSeries.hostedSeries()}if(intSeries!==null&&intSeries.actualMarkerBrush&&intSeries.actualMarkerBrush()!==null){brush=intSeries.actualMarkerBrush()}}e.actualItemBrush=brush?this._getValueFromBrush(brush):null;brush=series&&series.actualBrush?series.actualBrush():null;e.actualSeriesBrush=brush?this._getValueFromBrush(brush):null;return e},_getValueFromBrush:function(brush){var ret={},currStop,newStop;if(brush._isGradient){ret.type="linearGradient";if(brush._useCustomDirection){ret.startPoint={};ret.startPoint.x=brush._startX;ret.startPoint.y=brush._startY;ret.endPoint={};ret.endPoint.x=brush._endX;ret.endPoint.y=brush._endY}if(brush._gradientStops){ret.colorStops=[];for(var i=0;i<brush._gradientStops.length;i++){currStop=brush._gradientStops[i];newStop={};newStop.offset=currStop._offset;newStop.color=currStop.__fill;ret.colorStops.push(newStop)}}return ret}else{return brush.fill()}},_fireLegendItemMouseLeftButtonDown:function(sender,evtArgs){this._trigger("legendItemMouseLeftButtonDown",null,this._getLegendEvt(evtArgs))},_fireLegendItemMouseLeftButtonUp:function(sender,evtArgs){this._trigger("legendItemMouseLeftButtonUp",null,this._getLegendEvt(evtArgs))},_fireLegendItemMouseEnter:function(sender,evtArgs){this._trigger("legendItemMouseEnter",null,this._getLegendEvt(evtArgs))},_fireLegendItemMouseLeave:function(sender,evtArgs){this._trigger("legendItemMouseLeave",null,this._getLegendEvt(evtArgs))},_getLegend:function(){return this.legend},_setOption:function(key,value){switch(key){case"width":this.element.css("width",value);break;case"height":this.element.css("height",value);break}},exportVisualData:function(){if(this.legend===null){return null}return this.legend.exportVisualData()},destroy:function(){var elements,elem=this.element;$.Widget.prototype.destroy.call(this);if(this.legend){this.legend=null}if(elem){elem.removeClass(this._cssLegend);if(this.options.width){elem[0].style.width=this._oldWidth||""}if(this.options.height){elem[0].style.height=this._oldHeight||""}if(elem.children("table").length>0){elements=elem.children("table").children("tr");$.each(elements,function(key,tr){$(tr).unbind("mouseleave").unbind("mouseup").unbind("mousedown").unbind("mousemove")})}elem.empty()}return this},widget:function(){return this.element},id:function(){return this.element[0].id}});$.extend($.ui.igChartLegend,{version:"15.2.20152.1027"})})(jQuery);(function($){$(document).ready(function(){var wm=$("#__ig_wm__").length>0?$("#__ig_wm__"):$('<div id="__ig_wm__"></div>').appendTo(document.body);wm.css({position:"fixed",bottom:0,right:0,zIndex:1e3}).addClass("ui-igtrialwatermark")})})(jQuery);