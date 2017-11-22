<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>JSDoc: Class: Feature</title>

    <script src="scripts/prettify/prettify.js"> </script>
    <script src="scripts/prettify/lang-css.js"> </script>
    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link type="text/css" rel="stylesheet" href="styles/prettify-tomorrow.css">
    <link type="text/css" rel="stylesheet" href="styles/jsdoc-default.css">
</head>

<body>

<div id="main">

    <h1 class="page-title">Class: Feature</h1>

    




<section>

<header>
    
        <h2><span class="attribs"><span class="type-signature">(abstract) </span></span>
            <span class="ancestors"><a href="module-base_features.html">base/features</a>.</span>Feature<span class="signature">(name, node, options)</span><span class="type-signature"></span></h2>
        
            <div class="class-description">Abstract Feature class.</div>
        
    
</header>

<article>
    <div class="container-overview">
    
        

    
    <h2>Constructor</h2>
    

    
    <h4 class="name" id=".Feature"><span class="type-signature">(abstract) </span>new Feature<span class="signature">(name, node, options)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Constructor.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>name</code></td>
            

            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>

            

            

            <td class="description last">Name of the feature used by the `data-feature` attribute.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>node</code></td>
            

            <td class="type">
            
                
<span class="param-type">Node</span>


            
            </td>

            

            

            <td class="description last">Node the feature belongs to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>options</code></td>
            

            <td class="type">
            
                
<span class="param-type">Object</span>


            
            </td>

            

            

            <td class="description last">Feature options which can be used for anything.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line261">line 261</a>
    </li></ul></dd>
    

    

    

    
</dl>


















    
    </div>

    

    

    

    

    

    

    
        <h3 class="subsection-title">Members</h3>

        
            
<h4 class="name" id="name"><span class="type-signature"></span>name<span class="type-signature"></span></h4>




<div class="description">
    Return name the feature has been initialized with.
</div>







<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line300">line 300</a>
    </li></ul></dd>
    

    

    

    
</dl>






        
            
<h4 class="name" id="node"><span class="type-signature"></span>node<span class="type-signature"></span></h4>




<div class="description">
    Return node the feature belongs to.
</div>







<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line306">line 306</a>
    </li></ul></dd>
    

    

    

    
</dl>






        
            
<h4 class="name" id="options"><span class="type-signature"></span>options<span class="type-signature"></span></h4>




<div class="description">
    Return given options the feature has been initialized with.
</div>







<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line322">line 322</a>
    </li></ul></dd>
    

    

    

    
</dl>






        
    

    
        <h3 class="subsection-title">Methods</h3>

        
            

    

    
    <h4 class="name" id="$"><span class="type-signature"></span>$<span class="signature">(selector)</span><span class="type-signature"> &rarr; {Element}</span></h4>
    

    



<div class="description">
    Return first element by given selector inside the feature node.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>selector</code></td>
            

            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>

            

            

            <td class="description last">CSS selector</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line330">line 330</a>
    </li></ul></dd>
    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Element</span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id="$$"><span class="type-signature"></span>$$<span class="signature">(selector)</span><span class="type-signature"> &rarr; {Array.&lt;Element>}</span></h4>
    

    



<div class="description">
    Return all elements by given selector inside the feature node as array.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>selector</code></td>
            

            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>

            

            

            <td class="description last">CSS selector</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line338">line 338</a>
    </li></ul></dd>
    

    

    

    
</dl>













<h5>Returns:</h5>

        


<dl>
    <dt>
        Type
    </dt>
    <dd>
        
<span class="param-type">Array.&lt;Element></span>


    </dd>
</dl>

    





        
            

    

    
    <h4 class="name" id="addEventListener"><span class="type-signature"></span>addEventListener<span class="signature">(node, type, fn, options)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Add event listener to given node.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>node</code></td>
            

            <td class="type">
            
                
<span class="param-type">Node</span>
|

<span class="param-type">NodeList</span>


            
            </td>

            

            

            <td class="description last">Node to add event listener to.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">String</span>


            
            </td>

            

            

            <td class="description last">Event type to add.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>fn</code></td>
            

            <td class="type">
            
                
<span class="param-type">function</span>


            
            </td>

            

            

            <td class="description last">Event handler</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>options</code></td>
            

            <td class="type">
            
                
<span class="param-type">Object</span>
|

<span class="param-type">Boolean</span>


            
            </td>

            

            

            <td class="description last">Event handler options</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line348">line 348</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id="destroy"><span class="type-signature"></span>destroy<span class="signature">()</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Destroy feature.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line493">line 493</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id="init"><span class="type-signature"></span>init<span class="signature">()</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Initialize feature.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line490">line 490</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id="offAllHub"><span class="type-signature"></span>offAllHub<span class="signature">()</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Remove all events from global event hub added by this feature.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line476">line 476</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id="offHub"><span class="type-signature"></span>offHub<span class="signature">()</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Remove event from global event hub.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line458">line 458</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id="onHub"><span class="type-signature"></span>onHub<span class="signature">()</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Add event to global event hub.
</div>













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line447">line 447</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id="removeAllEventListener"><span class="type-signature"></span>removeAllEventListener<span class="signature">(node<span class="signature-attributes">opt</span>, fn<span class="signature-attributes">opt</span>)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Remove all listeners added by this feature.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        
        <th>Attributes</th>
        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>node</code></td>
            

            <td class="type">
            
                
<span class="param-type">Node</span>
|

<span class="param-type">null</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional><br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">Limit removing event listeners on given node.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>fn</code></td>
            

            <td class="type">
            
                
<span class="param-type">function</span>
|

<span class="param-type">null</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional><br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">Limit removing event listeners on given handler.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line421">line 421</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id="removeEventListener"><span class="type-signature"></span>removeEventListener<span class="signature">(node, type<span class="signature-attributes">opt</span>, fn<span class="signature-attributes">opt</span>)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Remove event listener from given node.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        
        <th>Attributes</th>
        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>node</code></td>
            

            <td class="type">
            
                
<span class="param-type">Node</span>
|

<span class="param-type">NodeList</span>


            
            </td>

            
                <td class="attributes">
                

                

                
                </td>
            

            
                <td class="default">
                
                </td>
            

            <td class="description last">Node to remove the event listener from.</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>type</code></td>
            

            <td class="type">
            
                
<span class="param-type">String</span>
|

<span class="param-type">null</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional><br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">Event type to remove (leave empty to remove listeners of all event types).</td>
        </tr>

    

        <tr>
            
                <td class="name"><code>fn</code></td>
            

            <td class="type">
            
                
<span class="param-type">function</span>
|

<span class="param-type">null</span>


            
            </td>

            
                <td class="attributes">
                
                    &lt;optional><br>
                

                

                
                </td>
            

            
                <td class="default">
                
                    null
                
                </td>
            

            <td class="description last">Handler to remove (leave empty to remove all listeners).</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line382">line 382</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
            

    

    
    <h4 class="name" id="replaceNode"><span class="type-signature"></span>replaceNode<span class="signature">(node)</span><span class="type-signature"></span></h4>
    

    



<div class="description">
    Replaces current feature node with given one.
</div>









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        <tr>
            
                <td class="name"><code>node</code></td>
            

            <td class="type">
            
                
<span class="param-type">Node</span>


            
            </td>

            

            

            <td class="description last">Replacement ndoe.</td>
        </tr>

    
    </tbody>
</table>






<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    

    
    <dt class="tag-source">Source:</dt>
    <dd class="tag-source"><ul class="dummy"><li>
        <a href="features.js.html">features.js</a>, <a href="features.js.html#line312">line 312</a>
    </li></ul></dd>
    

    

    

    
</dl>


















        
    

    

    
</article>

</section>




</div>

<nav>
    <h2><a href="index.html">Home</a></h2><h3>Modules</h3><ul><li><a href="module-base.html">base</a></li><li><a href="module-base_events.html">base/events</a></li><li><a href="module-base_features.html">base/features</a></li><li><a href="module-base_utils.html">base/utils</a></li><li><a href="module-base_utils_array.html">base/utils/array</a></li><li><a href="module-base_utils_check.html">base/utils/check</a></li><li><a href="module-base_utils_data.html">base/utils/data</a></li><li><a href="module-base_utils_device.html">base/utils/device</a></li><li><a href="module-base_utils_dom.html">base/utils/dom</a></li><li><a href="module-base_utils_fetch.html">base/utils/fetch</a></li><li><a href="module-base_utils_func.html">base/utils/func</a></li><li><a href="module-base_utils_media.html">base/utils/media</a></li><li><a href="module-base_utils_object.html">base/utils/object</a></li><li><a href="module-base_utils_string.html">base/utils/string</a></li><li><a href="module-base_utils_url.html">base/utils/url</a></li></ul><h3>Classes</h3><ul><li><a href="module-base_events-EventHub.html">EventHub</a></li><li><a href="module-base_features.html#.Feature">Feature</a></li><li><a href="module-base_utils_device.DeviceInfo.html">DeviceInfo</a></li><li><a href="module-base_utils_dom.Scroller.html">Scroller</a></li><li><a href="module-base_utils_dom.Sheet.html">Sheet</a></li></ul>
</nav>

<br class="clear">

<footer>
    Documentation generated by <a href="https://github.com/jsdoc3/jsdoc">JSDoc 3.5.5</a> on Wed Nov 22 2017 11:18:09 GMT+0100 (CET)
</footer>

<script> prettyPrint(); </script>
<script src="scripts/linenumber.js"> </script>
</body>
</html>