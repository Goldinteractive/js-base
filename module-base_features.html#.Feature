<!DOCTYPE html>
<html lang="en">
<head>
    
    <meta charset="utf-8">
    <title>JSDoc: Feature</title>

    <script src="scripts/prettify/prettify.js"></script>
    <script src="scripts/prettify/lang-css.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <!--[if lt IE 9]>
      <script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->
    <link href="https://fonts.googleapis.com/css?family=Muli:100,400,700|Oswald:300|Inconsolata,700" rel="stylesheet">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous">
    <link type="text/css" rel="stylesheet" href="https://jmblog.github.io/color-themes-for-google-code-prettify/themes/tomorrow-night.min.css">
    <link type="text/css" rel="stylesheet" href="styles/app.min.css">
</head>

<body>
    <div id="stickyNavbarOverlay"></div>
    <div class="top-navbar">
        <div class="container">
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    
                    
                        <h1 class="navbar-item">Documentation</h1>
                    
                    <a id="hamburger" role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                
            </nav>
        </div>
    </div>
    <div class="container">
        <div class="columns">
            <div class="column is-3" id="sidebarNav">
                <div class="sidebar">
                    <nav>
                        <h2><a href="index.html">Home</a></h2><div class="category"><h3>Modules</h3><ul><li><a href="module-base.html">base</a></li><li><a href="module-base_events.html">base/events</a></li><li><a href="module-base_features.html">base/features</a></li><li><a href="module-base_utils.html">base/utils</a></li><li><a href="module-base_utils_array.html">base/utils/array</a></li><li><a href="module-base_utils_check.html">base/utils/check</a></li><li><a href="module-base_utils_clipboard.html">base/utils/clipboard</a></li><li><a href="module-base_utils_data.html">base/utils/data</a></li><li><a href="module-base_utils_device.html">base/utils/device</a></li><li><a href="module-base_utils_dom.html">base/utils/dom</a></li><li><a href="module-base_utils_fetch.html">base/utils/fetch</a></li><li><a href="module-base_utils_func.html">base/utils/func</a></li><li><a href="module-base_utils_media.html">base/utils/media</a></li><li><a href="module-base_utils_string.html">base/utils/string</a></li><li><a href="module-base_utils_url.html">base/utils/url</a></li></ul><h3>Classes</h3><ul><li><a href="module-base_events-EventHub.html">EventHub</a></li><li><a href="module-base_features.html#.Feature">Feature</a></li><li><a href="module-base_utils_device.DeviceInfo.html">DeviceInfo</a></li><li><a href="module-base_utils_dom.Scroller.html">Scroller</a></li><li><a href="module-base_utils_dom.Sheet.html">Sheet</a></li></ul></div>
                    </nav>
                </div>
            </div>
            <div class="column is-9-desktop">
                <div class="content" id="main-content-wrapper">
                    <header class="page-title">
                        <p>Class</p>
                        <h1>Feature</h1>
                    </header>
                    
                    




<section>

<header>
    
        <h2><span class="attribs"><span class="type-signature">(abstract) </span></span>
            <span class="ancestors"><a href="module-base_features.html">base/features</a>.</span>Feature<span class="signature">(name, node, options)</span><span class="type-signature"></span></h2>
        
            <div class="class-description">Abstract Feature class.</div>
        
    
</header>

<article>
    <div class="container-overview">
    
        
            <div class='vertical-section'>
                <h3 class="title"><span>Constructor</span></h3>
                <div class="members">
                    <div class="member">

    
    <h4 class="name" id=".Feature">
        
            
                <span class='tag'>abstract</span>
            
        
        <span class="code-name">
            new Feature<span class="signature">(name, node, options)</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
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
    

        
<tr class="deep-level-0">
  
      <td class="name"><code>name</code></td>
  

  <td class="type">
  
      
<span class="param-type">String</span>


  
  </td>

  

  

  <td class="description last">Name of the feature used by the `data-feature` attribute.</td>
</tr>


    

        
<tr class="deep-level-0">
  
      <td class="name"><code>node</code></td>
  

  <td class="type">
  
      
<span class="param-type">Node</span>


  
  </td>

  

  

  <td class="description last">Node the feature belongs to.</td>
</tr>


    

        
<tr class="deep-level-0">
  
      <td class="name"><code>options</code></td>
  

  <td class="type">
  
      
<span class="param-type">Object</span>


  
  </td>

  

  

  <td class="description last">Feature options which can be used for anything.</td>
</tr>


    
    </tbody>
</table>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line454">line 454</a>
            </span>
        </p>
    
</dl>





















</div>
                </div>
            </div>
        
    
    </div>

    

    

    

    

    

    

    
        <div class='vertical-section'>
            <h3 class="title"><span>Members</span></h3>
            <div class="members">
            
                <div class="member">

<h4 class="name" id="name">
    
    <span class="code-name">
        name
    </span>
</h4>




<div class="description">
    Return name the feature has been initialized with.
</div>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line490">line 490</a>
            </span>
        </p>
    
</dl>





</div>
            
                <div class="member">

<h4 class="name" id="node">
    
    <span class="code-name">
        node
    </span>
</h4>




<div class="description">
    Return node the feature belongs to.
</div>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line498">line 498</a>
            </span>
        </p>
    
</dl>





</div>
            
                <div class="member">

<h4 class="name" id="options">
    
    <span class="code-name">
        options
    </span>
</h4>




<div class="description">
    Return given options the feature has been initialized with.
</div>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line517">line 517</a>
            </span>
        </p>
    
</dl>





</div>
            
            </div>
        </div>
    

    
        <div class='vertical-section'>
            <h3 class="title"><span>Methods</span></h3>
            <div class="members">
            
                <div class="member">

    
    <h4 class="name" id="$">
        
        <span class="code-name">
            $<span class="signature">(selector)</span><span class="type-signature"> &rarr; {Element}</span>
        </span>
    </h4>
    

    
    
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
    

        
<tr class="deep-level-0">
  
      <td class="name"><code>selector</code></td>
  

  <td class="type">
  
      
<span class="param-type">String</span>


  
  </td>

  

  

  <td class="description last">CSS selector</td>
</tr>


    
    </tbody>
</table>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line527">line 527</a>
            </span>
        </p>
    
</dl>


















    <div class='columns method-parameter'>
        <div class="column is-2"><label>Returns:</label></div>
        <div class="column is-10">
            
                    

<div class="columns">
    
    
    <div class='column is-5 has-text-left'>
        <label>Type: </label>
        
<span class="param-type">Element</span>


    </div>
    
</div>

                
        </div>
    </div>




</div>
            
                <div class="member">

    
    <h4 class="name" id="$$">
        
        <span class="code-name">
            $$<span class="signature">(selector)</span><span class="type-signature"> &rarr; {Array.&lt;Element>}</span>
        </span>
    </h4>
    

    
    
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
    

        
<tr class="deep-level-0">
  
      <td class="name"><code>selector</code></td>
  

  <td class="type">
  
      
<span class="param-type">String</span>


  
  </td>

  

  

  <td class="description last">CSS selector</td>
</tr>


    
    </tbody>
</table>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line537">line 537</a>
            </span>
        </p>
    
</dl>


















    <div class='columns method-parameter'>
        <div class="column is-2"><label>Returns:</label></div>
        <div class="column is-10">
            
                    

<div class="columns">
    
    
    <div class='column is-5 has-text-left'>
        <label>Type: </label>
        
<span class="param-type">Array.&lt;Element></span>


    </div>
    
</div>

                
        </div>
    </div>




</div>
            
                <div class="member">

    
    <h4 class="name" id="addEventListener">
        
        <span class="code-name">
            addEventListener<span class="signature">(node, type, fn, options)</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
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
    

        
<tr class="deep-level-0">
  
      <td class="name"><code>node</code></td>
  

  <td class="type">
  
      
<span class="param-type">Node</span>
|

<span class="param-type">NodeList</span>


  
  </td>

  

  

  <td class="description last">Node to add event listener to.</td>
</tr>


    

        
<tr class="deep-level-0">
  
      <td class="name"><code>type</code></td>
  

  <td class="type">
  
      
<span class="param-type">String</span>


  
  </td>

  

  

  <td class="description last">Event type to add.</td>
</tr>


    

        
<tr class="deep-level-0">
  
      <td class="name"><code>fn</code></td>
  

  <td class="type">
  
      
<span class="param-type">function</span>


  
  </td>

  

  

  <td class="description last">Event handler</td>
</tr>


    

        
<tr class="deep-level-0">
  
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

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line549">line 549</a>
            </span>
        </p>
    
</dl>





















</div>
            
                <div class="member">

    
    <h4 class="name" id="destroy">
        
        <span class="code-name">
            destroy<span class="signature">()</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
    <div class="description">
        Destroy feature instance.
    </div>
    













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line715">line 715</a>
            </span>
        </p>
    
</dl>





















</div>
            
                <div class="member">

    
    <h4 class="name" id="init">
        
        <span class="code-name">
            init<span class="signature">()</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
    <div class="description">
        Initialize feature instance.
    </div>
    













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line710">line 710</a>
            </span>
        </p>
    
</dl>





















</div>
            
                <div class="member">

    
    <h4 class="name" id="offAllHub">
        
        <span class="code-name">
            offAllHub<span class="signature">()</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
    <div class="description">
        Remove all events from global event hub added by this feature.
    </div>
    













<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line694">line 694</a>
            </span>
        </p>
    
</dl>





















</div>
            
                <div class="member">

    
    <h4 class="name" id="offHub">
        
        <span class="code-name">
            offHub<span class="signature">(event, fn)</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
    <div class="description">
        Remove event from global event hub.
    </div>
    









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        

        
        <th>Default</th>
        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        
<tr class="deep-level-0">
  
      <td class="name"><code>event</code></td>
  

  <td class="type">
  
      
<span class="param-type">string</span>


  
  </td>

  

  
      <td class="default">
      
      </td>
  

  <td class="description last">name</td>
</tr>


    

        
<tr class="deep-level-0">
  
      <td class="name"><code>fn</code></td>
  

  <td class="type">
  
      
<span class="param-type">function</span>


  
  </td>

  

  
      <td class="default">
      
          null
      
      </td>
  

  <td class="description last">function to remove</td>
</tr>


    
    </tbody>
</table>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line674">line 674</a>
            </span>
        </p>
    
</dl>





















</div>
            
                <div class="member">

    
    <h4 class="name" id="onHub">
        
        <span class="code-name">
            onHub<span class="signature">(event, fn)</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
    <div class="description">
        Add event to global event hub.
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
    

        
<tr class="deep-level-0">
  
      <td class="name"><code>event</code></td>
  

  <td class="type">
  
      
<span class="param-type">string</span>


  
  </td>

  

  

  <td class="description last">name</td>
</tr>


    

        
<tr class="deep-level-0">
  
      <td class="name"><code>fn</code></td>
  

  <td class="type">
  
      
<span class="param-type">function</span>


  
  </td>

  

  

  <td class="description last">function to call</td>
</tr>


    
    </tbody>
</table>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line659">line 659</a>
            </span>
        </p>
    
</dl>





















</div>
            
                <div class="member">

    
    <h4 class="name" id="removeAllEventListener">
        
        <span class="code-name">
            removeAllEventListener<span class="signature">(node<span class="signature-attributes">opt</span>, fn<span class="signature-attributes">opt</span>)</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
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
    

        
<tr class="deep-level-0">
  
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


    

        
<tr class="deep-level-0">
  
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

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line622">line 622</a>
            </span>
        </p>
    
</dl>





















</div>
            
                <div class="member">

    
    <h4 class="name" id="removeEventListener">
        
        <span class="code-name">
            removeEventListener<span class="signature">(node, type<span class="signature-attributes">opt</span>, fn<span class="signature-attributes">opt</span>)</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
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
    

        
<tr class="deep-level-0">
  
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


    

        
<tr class="deep-level-0">
  
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


    

        
<tr class="deep-level-0">
  
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

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line583">line 583</a>
            </span>
        </p>
    
</dl>





















</div>
            
                <div class="member">

    
    <h4 class="name" id="replaceNode">
        
        <span class="code-name">
            replaceNode<span class="signature">(node)</span><span class="type-signature"> &rarr; {Node}</span>
        </span>
    </h4>
    

    
    
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
    

        
<tr class="deep-level-0">
  
      <td class="name"><code>node</code></td>
  

  <td class="type">
  
      
<span class="param-type">Node</span>


  
  </td>

  

  

  <td class="description last">Replacement node.</td>
</tr>


    
    </tbody>
</table>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line507">line 507</a>
            </span>
        </p>
    
</dl>


















    <div class='columns method-parameter'>
        <div class="column is-2"><label>Returns:</label></div>
        <div class="column is-10">
            
                    

<div class="columns">
    
    
    <div class='column is-5 has-text-left'>
        <label>Type: </label>
        
<span class="param-type">Node</span>


    </div>
    
</div>

                
        </div>
    </div>




</div>
            
                <div class="member">

    
    <h4 class="name" id="triggerHub">
        
        <span class="code-name">
            triggerHub<span class="signature">(event, &hellip;args)</span><span class="type-signature"></span>
        </span>
    </h4>
    

    
    
    <div class="description">
        Emit event to global event hub.
    </div>
    









    <h5>Parameters:</h5>
    

<table class="params">
    <thead>
    <tr>
        
        <th>Name</th>
        

        <th>Type</th>

        
        <th>Attributes</th>
        

        

        <th class="last">Description</th>
    </tr>
    </thead>

    <tbody>
    

        
<tr class="deep-level-0">
  
      <td class="name"><code>event</code></td>
  

  <td class="type">
  
      
<span class="param-type">string</span>


  
  </td>

  
      <td class="attributes">
      

      

      
      </td>
  

  

  <td class="description last">name</td>
</tr>


    

        
<tr class="deep-level-0">
  
      <td class="name"><code>args</code></td>
  

  <td class="type">
  
      
<span class="param-type">any</span>


  
  </td>

  
      <td class="attributes">
      

      

      
          &lt;repeatable><br>
      
      </td>
  

  

  <td class="description last">arguments to pass to event hub</td>
</tr>


    
    </tbody>
</table>





<dl class="details">

    

    

    

    

    

    

    

    

    

    

    

    
    

    

    

    
        <p class="tag-source">
            <a href="features.js.html" class="button">View Source</a>
            <span>
                <a href="features.js.html">features.js</a>, <a href="features.js.html#line650">line 650</a>
            </span>
        </p>
    
</dl>





















</div>
            
            </div>
        </div>
    

    

    
</article>

</section>




                </div>
            </div>
        </div>
    </div>

<footer class="footer">
    <div class="content has-text-centered">
        <p>Documentation generated by <a href="https://github.com/jsdoc3/jsdoc">JSDoc 3.5.5</a> on Tue Jan 05 2021 10:34:26 GMT+0100 (Central European Standard Time)</p>
        <p class="sidebar-created-by">
            <a href="https://github.com/SoftwareBrothers/better-docs" target="_blank">BetterDocs theme</a> provided with <i class="fas fa-heart"></i> by 
            <a href="http://softwarebrothers.co" target="_blank">SoftwareBrothers</a>
        </p>
    </div>
</footer>

<script> prettyPrint(); </script>
<script src="scripts/app.min.js"></script>
<script src="scripts/linenumber.js"> </script>
</body>
</html>