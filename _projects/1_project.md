---
layout: page
title: Oculomics 
description: Our work exploring how the eye links to systemic health
category: "Artificial Intelligence"
img: assets/img/ai.png
importance: 1
related_publications: true
---

The eye is uniquely positioned among human organs in that it permits direct, non-invasive visualisation of both the vasculature and the central nervous system.

Given this property, ophthalmic structures have long been recognised as potential indicators of systemic health, particularly in relation to neurodegenerative and cardiovascular disease.

In our work - we use deep learning to explore what diseases we can predict using ophthalmic imaging (e.g. colour fundus photographs and optical coherence tomography), how accurate such predictions can be, and the biological mechanisms underpinning these relationships.


<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/En_face_WF_OCTA_Julian.bmp" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Topcon_fundus_photo_Julian.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/Widefield_OCTA_Julian.bmp" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    A range of Ophthalmic images have been shown to indicate underlying systemic disease, or risk of future systemic disease. Examples include optical coherence tomography with flow overlay ('OCT', left), colour fundus photography (middle) and OCT-angiography (OCT-A, right). 
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/oculomics.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    The field concerned with the relationship between the eye and systemic health has been termed 'Oculomics', and a wide range of disoders and traits have been identified to manifest in the eye or to be predictable based on ocular features.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
