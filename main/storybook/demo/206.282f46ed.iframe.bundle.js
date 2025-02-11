"use strict";(self.webpackChunkgeonetwork_ui=self.webpackChunkgeonetwork_ui||[]).push([[206],{"./node_modules/ol/array.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function binarySearch(haystack,needle,comparator){let mid,cmp;comparator=comparator||ascending;let low=0,high=haystack.length,found=!1;for(;low<high;)mid=low+(high-low>>1),cmp=+comparator(haystack[mid],needle),cmp<0?low=mid+1:(high=mid,found=!cmp);return found?low:~low}function ascending(a,b){return a>b?1:a<b?-1:0}function linearFindNearest(arr,target,direction){if(arr[0]<=target)return 0;const n=arr.length;if(target<=arr[n-1])return n-1;if("function"==typeof direction){for(let i=1;i<n;++i){const candidate=arr[i];if(candidate===target)return i;if(candidate<target)return direction(target,arr[i-1],candidate)>0?i-1:i}return n-1}if(direction>0){for(let i=1;i<n;++i)if(arr[i]<target)return i-1;return n-1}if(direction<0){for(let i=1;i<n;++i)if(arr[i]<=target)return i;return n-1}for(let i=1;i<n;++i){if(arr[i]==target)return i;if(arr[i]<target)return arr[i-1]-target<target-arr[i]?i-1:i}return n-1}function reverseSubArray(arr,begin,end){for(;begin<end;){const tmp=arr[begin];arr[begin]=arr[end],arr[end]=tmp,++begin,--end}}function extend(arr,data){const extension=Array.isArray(data)?data:[data],length=extension.length;for(let i=0;i<length;i++)arr[arr.length]=extension[i]}function equals(arr1,arr2){const len1=arr1.length;if(len1!==arr2.length)return!1;for(let i=0;i<len1;i++)if(arr1[i]!==arr2[i])return!1;return!0}function isSorted(arr,func,strict){const compare=func||ascending;return arr.every((function(currentVal,index){if(0===index)return!0;const res=compare(arr[index-1],currentVal);return!(res>0||strict&&0===res)}))}__webpack_require__.d(__webpack_exports__,{FZ:()=>reverseSubArray,fS:()=>equals,h7:()=>linearFindNearest,j2:()=>ascending,l7:()=>extend,pT:()=>isSorted,ry:()=>binarySearch})},"./node_modules/ol/asserts.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function assert(assertion,errorMessage){if(!assertion)throw new Error(errorMessage)}__webpack_require__.d(__webpack_exports__,{h:()=>assert})},"./node_modules/ol/console.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ZK:()=>warn});const levels={info:1,warn:2,error:3,none:4};let level=levels.info;function warn(...args){level>levels.warn||console.warn(...args)}},"./node_modules/ol/coordinate.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cf:()=>wrapX,IH:()=>add,U1:()=>rotate,bA:()=>scale,fS:()=>equals,jk:()=>getWorldsAway});var _extent_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ol/extent.js");function add(coordinate,delta){return coordinate[0]+=+delta[0],coordinate[1]+=+delta[1],coordinate}function equals(coordinate1,coordinate2){let equals=!0;for(let i=coordinate1.length-1;i>=0;--i)if(coordinate1[i]!=coordinate2[i]){equals=!1;break}return equals}function rotate(coordinate,angle){const cosAngle=Math.cos(angle),sinAngle=Math.sin(angle),x=coordinate[0]*cosAngle-coordinate[1]*sinAngle,y=coordinate[1]*cosAngle+coordinate[0]*sinAngle;return coordinate[0]=x,coordinate[1]=y,coordinate}function scale(coordinate,scale){return coordinate[0]*=scale,coordinate[1]*=scale,coordinate}function wrapX(coordinate,projection){if(projection.canWrapX()){const worldWidth=(0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.dz)(projection.getExtent()),worldsAway=getWorldsAway(coordinate,projection,worldWidth);worldsAway&&(coordinate[0]-=worldsAway*worldWidth)}return coordinate}function getWorldsAway(coordinate,projection,sourceExtentWidth){const projectionExtent=projection.getExtent();let worldsAway=0;return projection.canWrapX()&&(coordinate[0]<projectionExtent[0]||coordinate[0]>projectionExtent[2])&&(sourceExtentWidth=sourceExtentWidth||(0,_extent_js__WEBPACK_IMPORTED_MODULE_0__.dz)(projectionExtent),worldsAway=Math.floor((coordinate[0]-projectionExtent[0])/sourceExtentWidth)),worldsAway}},"./node_modules/ol/extent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Cf:()=>wrapX,Cr:()=>getHeight,EO:()=>returnOrUpdate,Ed:()=>getIntersection,GN:()=>createOrUpdateFromFlatCoordinates,H6:()=>forEachCorner,HK:()=>createOrUpdateFromCoordinate,I7:()=>intersectsSegment,MV:()=>wrapAndSliceX,Ne:()=>applyTransform,T9:()=>createOrUpdate,Wj:()=>extendCoordinate,Xv:()=>getTopRight,YN:()=>createOrUpdateEmpty,b8:()=>containsCoordinate,bg:()=>getArea,d9:()=>clone,dY:()=>getRotatedViewport,dz:()=>getWidth,f3:()=>buffer,fS:()=>equals,g0:()=>getCorner,hC:()=>getBottomLeft,hI:()=>boundingExtent,jE:()=>containsXY,kK:()=>intersects,l7:()=>extend,lJ:()=>createEmpty,p8:()=>getForViewAndSize,pX:()=>coordinateRelationship,qP:()=>extendFlatCoordinates,qf:()=>closestSquaredDistanceXY,qg:()=>getCenter,r4:()=>containsExtent,rL:()=>getTopLeft,w$:()=>getBottomRight,xb:()=>isEmpty});var _extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ol/extent/Relationship.js");function boundingExtent(coordinates){const extent=createEmpty();for(let i=0,ii=coordinates.length;i<ii;++i)extendCoordinate(extent,coordinates[i]);return extent}function buffer(extent,value,dest){return dest?(dest[0]=extent[0]-value,dest[1]=extent[1]-value,dest[2]=extent[2]+value,dest[3]=extent[3]+value,dest):[extent[0]-value,extent[1]-value,extent[2]+value,extent[3]+value]}function clone(extent,dest){return dest?(dest[0]=extent[0],dest[1]=extent[1],dest[2]=extent[2],dest[3]=extent[3],dest):extent.slice()}function closestSquaredDistanceXY(extent,x,y){let dx,dy;return dx=x<extent[0]?extent[0]-x:extent[2]<x?x-extent[2]:0,dy=y<extent[1]?extent[1]-y:extent[3]<y?y-extent[3]:0,dx*dx+dy*dy}function containsCoordinate(extent,coordinate){return containsXY(extent,coordinate[0],coordinate[1])}function containsExtent(extent1,extent2){return extent1[0]<=extent2[0]&&extent2[2]<=extent1[2]&&extent1[1]<=extent2[1]&&extent2[3]<=extent1[3]}function containsXY(extent,x,y){return extent[0]<=x&&x<=extent[2]&&extent[1]<=y&&y<=extent[3]}function coordinateRelationship(extent,coordinate){const minX=extent[0],minY=extent[1],maxX=extent[2],maxY=extent[3],x=coordinate[0],y=coordinate[1];let relationship=_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.UNKNOWN;return x<minX?relationship|=_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.LEFT:x>maxX&&(relationship|=_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.RIGHT),y<minY?relationship|=_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.BELOW:y>maxY&&(relationship|=_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.ABOVE),relationship===_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.UNKNOWN&&(relationship=_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.INTERSECTING),relationship}function createEmpty(){return[1/0,1/0,-1/0,-1/0]}function createOrUpdate(minX,minY,maxX,maxY,dest){return dest?(dest[0]=minX,dest[1]=minY,dest[2]=maxX,dest[3]=maxY,dest):[minX,minY,maxX,maxY]}function createOrUpdateEmpty(dest){return createOrUpdate(1/0,1/0,-1/0,-1/0,dest)}function createOrUpdateFromCoordinate(coordinate,dest){const x=coordinate[0],y=coordinate[1];return createOrUpdate(x,y,x,y,dest)}function createOrUpdateFromFlatCoordinates(flatCoordinates,offset,end,stride,dest){return extendFlatCoordinates(createOrUpdateEmpty(dest),flatCoordinates,offset,end,stride)}function equals(extent1,extent2){return extent1[0]==extent2[0]&&extent1[2]==extent2[2]&&extent1[1]==extent2[1]&&extent1[3]==extent2[3]}function extend(extent1,extent2){return extent2[0]<extent1[0]&&(extent1[0]=extent2[0]),extent2[2]>extent1[2]&&(extent1[2]=extent2[2]),extent2[1]<extent1[1]&&(extent1[1]=extent2[1]),extent2[3]>extent1[3]&&(extent1[3]=extent2[3]),extent1}function extendCoordinate(extent,coordinate){coordinate[0]<extent[0]&&(extent[0]=coordinate[0]),coordinate[0]>extent[2]&&(extent[2]=coordinate[0]),coordinate[1]<extent[1]&&(extent[1]=coordinate[1]),coordinate[1]>extent[3]&&(extent[3]=coordinate[1])}function extendFlatCoordinates(extent,flatCoordinates,offset,end,stride){for(;offset<end;offset+=stride)extendXY(extent,flatCoordinates[offset],flatCoordinates[offset+1]);return extent}function extendXY(extent,x,y){extent[0]=Math.min(extent[0],x),extent[1]=Math.min(extent[1],y),extent[2]=Math.max(extent[2],x),extent[3]=Math.max(extent[3],y)}function forEachCorner(extent,callback){let val;return val=callback(getBottomLeft(extent)),val||(val=callback(getBottomRight(extent)),val||(val=callback(getTopRight(extent)),val||(val=callback(getTopLeft(extent)),val||!1)))}function getArea(extent){let area=0;return isEmpty(extent)||(area=getWidth(extent)*getHeight(extent)),area}function getBottomLeft(extent){return[extent[0],extent[1]]}function getBottomRight(extent){return[extent[2],extent[1]]}function getCenter(extent){return[(extent[0]+extent[2])/2,(extent[1]+extent[3])/2]}function getCorner(extent,corner){let coordinate;if("bottom-left"===corner)coordinate=getBottomLeft(extent);else if("bottom-right"===corner)coordinate=getBottomRight(extent);else if("top-left"===corner)coordinate=getTopLeft(extent);else{if("top-right"!==corner)throw new Error("Invalid corner");coordinate=getTopRight(extent)}return coordinate}function getForViewAndSize(center,resolution,rotation,size,dest){const[x0,y0,x1,y1,x2,y2,x3,y3]=getRotatedViewport(center,resolution,rotation,size);return createOrUpdate(Math.min(x0,x1,x2,x3),Math.min(y0,y1,y2,y3),Math.max(x0,x1,x2,x3),Math.max(y0,y1,y2,y3),dest)}function getRotatedViewport(center,resolution,rotation,size){const dx=resolution*size[0]/2,dy=resolution*size[1]/2,cosRotation=Math.cos(rotation),sinRotation=Math.sin(rotation),xCos=dx*cosRotation,xSin=dx*sinRotation,yCos=dy*cosRotation,ySin=dy*sinRotation,x=center[0],y=center[1];return[x-xCos+ySin,y-xSin-yCos,x-xCos-ySin,y-xSin+yCos,x+xCos-ySin,y+xSin+yCos,x+xCos+ySin,y+xSin-yCos,x-xCos+ySin,y-xSin-yCos]}function getHeight(extent){return extent[3]-extent[1]}function getIntersection(extent1,extent2,dest){const intersection=dest||[1/0,1/0,-1/0,-1/0];return intersects(extent1,extent2)?(extent1[0]>extent2[0]?intersection[0]=extent1[0]:intersection[0]=extent2[0],extent1[1]>extent2[1]?intersection[1]=extent1[1]:intersection[1]=extent2[1],extent1[2]<extent2[2]?intersection[2]=extent1[2]:intersection[2]=extent2[2],extent1[3]<extent2[3]?intersection[3]=extent1[3]:intersection[3]=extent2[3]):createOrUpdateEmpty(intersection),intersection}function getTopLeft(extent){return[extent[0],extent[3]]}function getTopRight(extent){return[extent[2],extent[3]]}function getWidth(extent){return extent[2]-extent[0]}function intersects(extent1,extent2){return extent1[0]<=extent2[2]&&extent1[2]>=extent2[0]&&extent1[1]<=extent2[3]&&extent1[3]>=extent2[1]}function isEmpty(extent){return extent[2]<extent[0]||extent[3]<extent[1]}function returnOrUpdate(extent,dest){return dest?(dest[0]=extent[0],dest[1]=extent[1],dest[2]=extent[2],dest[3]=extent[3],dest):extent}function intersectsSegment(extent,start,end){let intersects=!1;const startRel=coordinateRelationship(extent,start),endRel=coordinateRelationship(extent,end);if(startRel===_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.INTERSECTING||endRel===_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.INTERSECTING)intersects=!0;else{const minX=extent[0],minY=extent[1],maxX=extent[2],maxY=extent[3],startX=start[0],startY=start[1],endX=end[0],endY=end[1],slope=(endY-startY)/(endX-startX);let x,y;endRel&_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.ABOVE&&!(startRel&_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.ABOVE)&&(x=endX-(endY-maxY)/slope,intersects=x>=minX&&x<=maxX),intersects||!(endRel&_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.RIGHT)||startRel&_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.RIGHT||(y=endY-(endX-maxX)*slope,intersects=y>=minY&&y<=maxY),intersects||!(endRel&_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.BELOW)||startRel&_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.BELOW||(x=endX-(endY-minY)/slope,intersects=x>=minX&&x<=maxX),intersects||!(endRel&_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.LEFT)||startRel&_extent_Relationship_js__WEBPACK_IMPORTED_MODULE_0__.Z.LEFT||(y=endY-(endX-minX)*slope,intersects=y>=minY&&y<=maxY)}return intersects}function applyTransform(extent,transformFn,dest,stops){if(isEmpty(extent))return createOrUpdateEmpty(dest);let coordinates=[];if(stops>1){const width=extent[2]-extent[0],height=extent[3]-extent[1];for(let i=0;i<stops;++i)coordinates.push(extent[0]+width*i/stops,extent[1],extent[2],extent[1]+height*i/stops,extent[2]-width*i/stops,extent[3],extent[0],extent[3]-height*i/stops)}else coordinates=[extent[0],extent[1],extent[2],extent[1],extent[2],extent[3],extent[0],extent[3]];transformFn(coordinates,coordinates,2);const xs=[],ys=[];for(let i=0,l=coordinates.length;i<l;i+=2)xs.push(coordinates[i]),ys.push(coordinates[i+1]);return function _boundingExtentXYs(xs,ys,dest){return createOrUpdate(Math.min.apply(null,xs),Math.min.apply(null,ys),Math.max.apply(null,xs),Math.max.apply(null,ys),dest)}(xs,ys,dest)}function wrapX(extent,projection){const projectionExtent=projection.getExtent(),center=getCenter(extent);if(projection.canWrapX()&&(center[0]<projectionExtent[0]||center[0]>=projectionExtent[2])){const worldWidth=getWidth(projectionExtent),offset=Math.floor((center[0]-projectionExtent[0])/worldWidth)*worldWidth;extent[0]-=offset,extent[2]-=offset}return extent}function wrapAndSliceX(extent,projection){if(projection.canWrapX()){const projectionExtent=projection.getExtent();if(!isFinite(extent[0])||!isFinite(extent[2]))return[[projectionExtent[0],extent[1],projectionExtent[2],extent[3]]];wrapX(extent,projection);const worldWidth=getWidth(projectionExtent);if(getWidth(extent)>worldWidth)return[[projectionExtent[0],extent[1],projectionExtent[2],extent[3]]];if(extent[0]<projectionExtent[0])return[[extent[0]+worldWidth,extent[1],projectionExtent[2],extent[3]],[projectionExtent[0],extent[1],extent[2],extent[3]]];if(extent[2]>projectionExtent[2])return[[extent[0],extent[1],projectionExtent[2],extent[3]],[projectionExtent[0],extent[1],extent[2]-worldWidth,extent[3]]]}return[extent]}},"./node_modules/ol/extent/Relationship.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={UNKNOWN:0,INTERSECTING:1,ABOVE:2,RIGHT:4,BELOW:8,LEFT:16}},"./node_modules/ol/math.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function clamp(value,min,max){return Math.min(Math.max(value,min),max)}function squaredSegmentDistance(x,y,x1,y1,x2,y2){const dx=x2-x1,dy=y2-y1;if(0!==dx||0!==dy){const t=((x-x1)*dx+(y-y1)*dy)/(dx*dx+dy*dy);t>1?(x1=x2,y1=y2):t>0&&(x1+=dx*t,y1+=dy*t)}return squaredDistance(x,y,x1,y1)}function squaredDistance(x1,y1,x2,y2){const dx=x2-x1,dy=y2-y1;return dx*dx+dy*dy}function solveLinearSystem(mat){const n=mat.length;for(let i=0;i<n;i++){let maxRow=i,maxEl=Math.abs(mat[i][i]);for(let r=i+1;r<n;r++){const absValue=Math.abs(mat[r][i]);absValue>maxEl&&(maxEl=absValue,maxRow=r)}if(0===maxEl)return null;const tmp=mat[maxRow];mat[maxRow]=mat[i],mat[i]=tmp;for(let j=i+1;j<n;j++){const coef=-mat[j][i]/mat[i][i];for(let k=i;k<n+1;k++)i==k?mat[j][k]=0:mat[j][k]+=coef*mat[i][k]}}const x=new Array(n);for(let l=n-1;l>=0;l--){x[l]=mat[l][n]/mat[l][l];for(let m=l-1;m>=0;m--)mat[m][n]-=mat[m][l]*x[l]}return x}function toRadians(angleInDegrees){return angleInDegrees*Math.PI/180}function modulo(a,b){const r=a%b;return r*b<0?r+b:r}function lerp(a,b,x){return a+x*(b-a)}function toFixed(n,decimals){const factor=Math.pow(10,decimals);return Math.round(n*factor)/factor}function round(n,decimals){return Math.round(toFixed(n,decimals))}function floor(n,decimals){return Math.floor(toFixed(n,decimals))}function ceil(n,decimals){return Math.ceil(toFixed(n,decimals))}__webpack_require__.d(__webpack_exports__,{$W:()=>modulo,FH:()=>toFixed,GW:()=>floor,NM:()=>round,SV:()=>solveLinearSystem,Yr:()=>toRadians,bI:()=>squaredDistance,mD:()=>ceil,rU:()=>squaredSegmentDistance,t7:()=>lerp,uZ:()=>clamp})},"./node_modules/ol/proj.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Wm:()=>Units.W,zY:()=>addCoordinateTransforms,rM:()=>addEquivalentProjections,Sx:()=>addProjection,UQ:()=>createProjection,uA:()=>createSafeCoordinateTransform,h_:()=>disableCoordinateWarning,OP:()=>equivalent,mi:()=>fromLonLat,Vs:()=>fromUserCoordinate,dY:()=>fromUserExtent,U2:()=>proj_get,_Q:()=>getPointResolution,Ck:()=>getTransform,WO:()=>getTransformFromProjections,Cs:()=>getUserProjection,lO:()=>toUserCoordinate,Fj:()=>toUserExtent,on:()=>toUserResolution,vs:()=>transform,$A:()=>transformExtent});var Projection=__webpack_require__("./node_modules/ol/proj/Projection.js");const RADIUS=6378137,HALF_SIZE=Math.PI*RADIUS,EXTENT=[-HALF_SIZE,-HALF_SIZE,HALF_SIZE,HALF_SIZE],WORLD_EXTENT=[-180,-85,180,85],MAX_SAFE_Y=RADIUS*Math.log(Math.tan(Math.PI/2));class EPSG3857Projection extends Projection.Z{constructor(code){super({code,units:"m",extent:EXTENT,global:!0,worldExtent:WORLD_EXTENT,getPointResolution:function(resolution,point){return resolution/Math.cosh(point[1]/RADIUS)}})}}const PROJECTIONS=[new EPSG3857Projection("EPSG:3857"),new EPSG3857Projection("EPSG:102100"),new EPSG3857Projection("EPSG:102113"),new EPSG3857Projection("EPSG:900913"),new EPSG3857Projection("http://www.opengis.net/def/crs/EPSG/0/3857"),new EPSG3857Projection("http://www.opengis.net/gml/srs/epsg.xml#3857")];function fromEPSG4326(input,output,dimension){const length=input.length;dimension=dimension>1?dimension:2,void 0===output&&(output=dimension>2?input.slice():new Array(length));for(let i=0;i<length;i+=dimension){output[i]=HALF_SIZE*input[i]/180;let y=RADIUS*Math.log(Math.tan(Math.PI*(+input[i+1]+90)/360));y>MAX_SAFE_Y?y=MAX_SAFE_Y:y<-MAX_SAFE_Y&&(y=-MAX_SAFE_Y),output[i+1]=y}return output}function toEPSG4326(input,output,dimension){const length=input.length;dimension=dimension>1?dimension:2,void 0===output&&(output=dimension>2?input.slice():new Array(length));for(let i=0;i<length;i+=dimension)output[i]=180*input[i]/HALF_SIZE,output[i+1]=360*Math.atan(Math.exp(input[i+1]/RADIUS))/Math.PI-90;return output}const epsg4326_EXTENT=[-180,-90,180,90],METERS_PER_UNIT=6378137*Math.PI/180;class EPSG4326Projection extends Projection.Z{constructor(code,axisOrientation){super({code,units:"degrees",extent:epsg4326_EXTENT,axisOrientation,global:!0,metersPerUnit:METERS_PER_UNIT,worldExtent:epsg4326_EXTENT})}}const epsg4326_PROJECTIONS=[new EPSG4326Projection("CRS:84"),new EPSG4326Projection("EPSG:4326","neu"),new EPSG4326Projection("urn:ogc:def:crs:OGC:1.3:CRS84"),new EPSG4326Projection("urn:ogc:def:crs:OGC:2:84"),new EPSG4326Projection("http://www.opengis.net/def/crs/OGC/1.3/CRS84"),new EPSG4326Projection("http://www.opengis.net/gml/srs/epsg.xml#4326","neu"),new EPSG4326Projection("http://www.opengis.net/def/crs/EPSG/0/4326","neu")];var Units=__webpack_require__("./node_modules/ol/proj/Units.js");let cache={};var transforms=__webpack_require__("./node_modules/ol/proj/transforms.js"),ol_extent=__webpack_require__("./node_modules/ol/extent.js"),math=__webpack_require__("./node_modules/ol/math.js"),ol_coordinate=__webpack_require__("./node_modules/ol/coordinate.js");const DEFAULT_RADIUS=6371008.8;function getDistance(c1,c2,radius){radius=radius||DEFAULT_RADIUS;const lat1=(0,math.Yr)(c1[1]),lat2=(0,math.Yr)(c2[1]),deltaLatBy2=(lat2-lat1)/2,deltaLonBy2=(0,math.Yr)(c2[0]-c1[0])/2,a=Math.sin(deltaLatBy2)*Math.sin(deltaLatBy2)+Math.sin(deltaLonBy2)*Math.sin(deltaLonBy2)*Math.cos(lat1)*Math.cos(lat2);return 2*radius*Math.atan2(Math.sqrt(a),Math.sqrt(1-a))}var console=__webpack_require__("./node_modules/ol/console.js");let showCoordinateWarning=!0;function disableCoordinateWarning(disable){showCoordinateWarning=!(void 0===disable||disable)}function cloneTransform(input,output){if(void 0!==output)for(let i=0,ii=input.length;i<ii;++i)output[i]=input[i];else output=input.slice();return output}function identityTransform(input,output){if(void 0!==output&&input!==output){for(let i=0,ii=input.length;i<ii;++i)output[i]=input[i];input=output}return input}function addProjection(projection){!function add(code,projection){cache[code]=projection}(projection.getCode(),projection),(0,transforms.IH)(projection,projection,cloneTransform)}function proj_get(projectionLike){return"string"==typeof projectionLike?function get(code){return cache[code]||cache[code.replace(/urn:(x-)?ogc:def:crs:EPSG:(.*:)?(\w+)$/,"EPSG:$3")]||null}(projectionLike):projectionLike||null}function getPointResolution(projection,resolution,point,units){let pointResolution;const getter=(projection=proj_get(projection)).getPointResolutionFunc();if(getter){if(pointResolution=getter(resolution,point),units&&units!==projection.getUnits()){const metersPerUnit=projection.getMetersPerUnit();metersPerUnit&&(pointResolution=pointResolution*metersPerUnit/Units.W[units])}}else{const projUnits=projection.getUnits();if("degrees"==projUnits&&!units||"degrees"==units)pointResolution=resolution;else{const toEPSG4326=getTransformFromProjections(projection,proj_get("EPSG:4326"));if(toEPSG4326===identityTransform&&"degrees"!==projUnits)pointResolution=resolution*projection.getMetersPerUnit();else{let vertices=[point[0]-resolution/2,point[1],point[0]+resolution/2,point[1],point[0],point[1]-resolution/2,point[0],point[1]+resolution/2];vertices=toEPSG4326(vertices,vertices,2);pointResolution=(getDistance(vertices.slice(0,2),vertices.slice(2,4))+getDistance(vertices.slice(4,6),vertices.slice(6,8)))/2}const metersPerUnit=units?Units.W[units]:projection.getMetersPerUnit();void 0!==metersPerUnit&&(pointResolution/=metersPerUnit)}}return pointResolution}function addEquivalentProjections(projections){!function addProjections(projections){projections.forEach(addProjection)}(projections),projections.forEach((function(source){projections.forEach((function(destination){source!==destination&&(0,transforms.IH)(source,destination,cloneTransform)}))}))}function createProjection(projection,defaultCode){return projection?"string"==typeof projection?proj_get(projection):projection:proj_get(defaultCode)}function createTransformFromCoordinateTransform(coordTransform){return function(input,output,dimension){const length=input.length;dimension=void 0!==dimension?dimension:2,output=void 0!==output?output:new Array(length);for(let i=0;i<length;i+=dimension){const point=coordTransform(input.slice(i,i+dimension)),pointLength=point.length;for(let j=0,jj=dimension;j<jj;++j)output[i+j]=j>=pointLength?input[i+j]:point[j]}return output}}function addCoordinateTransforms(source,destination,forward,inverse){const sourceProj=proj_get(source),destProj=proj_get(destination);(0,transforms.IH)(sourceProj,destProj,createTransformFromCoordinateTransform(forward)),(0,transforms.IH)(destProj,sourceProj,createTransformFromCoordinateTransform(inverse))}function fromLonLat(coordinate,projection){return disableCoordinateWarning(),transform(coordinate,"EPSG:4326",void 0!==projection?projection:"EPSG:3857")}function equivalent(projection1,projection2){if(projection1===projection2)return!0;const equalUnits=projection1.getUnits()===projection2.getUnits();if(projection1.getCode()===projection2.getCode())return equalUnits;return getTransformFromProjections(projection1,projection2)===cloneTransform&&equalUnits}function getTransformFromProjections(sourceProjection,destinationProjection){const sourceCode=sourceProjection.getCode(),destinationCode=destinationProjection.getCode();let transformFunc=(0,transforms.U2)(sourceCode,destinationCode);return transformFunc||(transformFunc=identityTransform),transformFunc}function getTransform(source,destination){return getTransformFromProjections(proj_get(source),proj_get(destination))}function transform(coordinate,source,destination){return getTransform(source,destination)(coordinate,void 0,coordinate.length)}function transformExtent(extent,source,destination,stops){const transformFunc=getTransform(source,destination);return(0,ol_extent.Ne)(extent,transformFunc,void 0,stops)}let userProjection=null;function getUserProjection(){return userProjection}function toUserCoordinate(coordinate,sourceProjection){return userProjection?transform(coordinate,sourceProjection,userProjection):coordinate}function fromUserCoordinate(coordinate,destProjection){return userProjection?transform(coordinate,userProjection,destProjection):(showCoordinateWarning&&!(0,ol_coordinate.fS)(coordinate,[0,0])&&coordinate[0]>=-180&&coordinate[0]<=180&&coordinate[1]>=-90&&coordinate[1]<=90&&(showCoordinateWarning=!1,(0,console.ZK)("Call useGeographic() from ol/proj once to work with [longitude, latitude] coordinates.")),coordinate)}function toUserExtent(extent,sourceProjection){return userProjection?transformExtent(extent,sourceProjection,userProjection):extent}function fromUserExtent(extent,destProjection){return userProjection?transformExtent(extent,userProjection,destProjection):extent}function toUserResolution(resolution,sourceProjection){if(!userProjection)return resolution;const sourceMetersPerUnit=proj_get(sourceProjection).getMetersPerUnit(),userMetersPerUnit=userProjection.getMetersPerUnit();return sourceMetersPerUnit&&userMetersPerUnit?resolution*sourceMetersPerUnit/userMetersPerUnit:resolution}function createSafeCoordinateTransform(sourceProj,destProj,transform){return function(coord){let transformed,worldsAway;if(sourceProj.canWrapX()){const sourceExtent=sourceProj.getExtent(),sourceExtentWidth=(0,ol_extent.dz)(sourceExtent);coord=coord.slice(0),worldsAway=(0,ol_coordinate.jk)(coord,sourceProj,sourceExtentWidth),worldsAway&&(coord[0]=coord[0]-worldsAway*sourceExtentWidth),coord[0]=(0,math.uZ)(coord[0],sourceExtent[0],sourceExtent[2]),coord[1]=(0,math.uZ)(coord[1],sourceExtent[1],sourceExtent[3]),transformed=transform(coord)}else transformed=transform(coord);return worldsAway&&destProj.canWrapX()&&(transformed[0]+=worldsAway*(0,ol_extent.dz)(destProj.getExtent())),transformed}}!function addCommon(){addEquivalentProjections(PROJECTIONS),addEquivalentProjections(epsg4326_PROJECTIONS),function addEquivalentTransforms(projections1,projections2,forwardTransform,inverseTransform){projections1.forEach((function(projection1){projections2.forEach((function(projection2){(0,transforms.IH)(projection1,projection2,forwardTransform),(0,transforms.IH)(projection2,projection1,inverseTransform)}))}))}(epsg4326_PROJECTIONS,PROJECTIONS,fromEPSG4326,toEPSG4326)}()},"./node_modules/ol/proj/Projection.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _Units_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ol/proj/Units.js");const __WEBPACK_DEFAULT_EXPORT__=class Projection{constructor(options){this.code_=options.code,this.units_=options.units,this.extent_=void 0!==options.extent?options.extent:null,this.worldExtent_=void 0!==options.worldExtent?options.worldExtent:null,this.axisOrientation_=void 0!==options.axisOrientation?options.axisOrientation:"enu",this.global_=void 0!==options.global&&options.global,this.canWrapX_=!(!this.global_||!this.extent_),this.getPointResolutionFunc_=options.getPointResolution,this.defaultTileGrid_=null,this.metersPerUnit_=options.metersPerUnit}canWrapX(){return this.canWrapX_}getCode(){return this.code_}getExtent(){return this.extent_}getUnits(){return this.units_}getMetersPerUnit(){return this.metersPerUnit_||_Units_js__WEBPACK_IMPORTED_MODULE_0__.W[this.units_]}getWorldExtent(){return this.worldExtent_}getAxisOrientation(){return this.axisOrientation_}isGlobal(){return this.global_}setGlobal(global){this.global_=global,this.canWrapX_=!(!global||!this.extent_)}getDefaultTileGrid(){return this.defaultTileGrid_}setDefaultTileGrid(tileGrid){this.defaultTileGrid_=tileGrid}setExtent(extent){this.extent_=extent,this.canWrapX_=!(!this.global_||!extent)}setWorldExtent(worldExtent){this.worldExtent_=worldExtent}setGetPointResolution(func){this.getPointResolutionFunc_=func}getPointResolutionFunc(){return this.getPointResolutionFunc_}}},"./node_modules/ol/proj/Units.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>METERS_PER_UNIT});const METERS_PER_UNIT={radians:6370997/(2*Math.PI),degrees:2*Math.PI*6370997/360,ft:.3048,m:1,"us-ft":1200/3937}},"./node_modules/ol/proj/transforms.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{IH:()=>add,U2:()=>get});let transforms={};function add(source,destination,transformFn){const sourceCode=source.getCode(),destinationCode=destination.getCode();sourceCode in transforms||(transforms[sourceCode]={}),transforms[sourceCode][destinationCode]=transformFn}function get(sourceCode,destinationCode){let transform;return sourceCode in transforms&&destinationCode in transforms[sourceCode]&&(transform=transforms[sourceCode][destinationCode]),transform}}}]);