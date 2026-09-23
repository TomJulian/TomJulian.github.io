---
layout: page
permalink: /repositories/
title: code & resources
description: Reusable research tools and model resources that can be shared publicly.
nav: true
nav_order: 4
---

I share code and model resources when they can support reproducible research and responsible reuse. This page describes what each resource does, the setting in which it was developed, and any important limits on its use.

## Ret-AAE

<div class="resource-item">
  <p class="resource-kicker">Python | Apache 2.0</p>
  <h3>Ophthalmic image encoders for reproducible phenotyping</h3>
  <p>Ret-AAE is a public implementation of adversarial autoencoder encoders for optical coherence tomography and colour fundus photography. The models produce 256-dimensional representations that can be used to investigate imaging phenotypes at scale.</p>
  <p>The published checkpoints were validated using the middle slice from TOPCON 3D OCT 1000 Mk2 scans and AutoMorph-preprocessed colour fundus photographs. Encoder checkpoints are available; the decoder is not shared because of UK Biobank policies governing generative AI trained on its data.</p>
  <div class="resource-actions">
    <a class="btn btn-primary" href="https://github.com/TomJulian/Ret-AAE">View code on GitHub</a>
    <a class="btn btn-outline-primary" href="https://doi.org/10.1038/s44161-026-00815-5">Read the associated paper</a>
  </div>
</div>

## Working together

I welcome conversations about methods, validation, clinical translation, and potential academic or industry collaborations. This page is not a route for requesting access to clinical or research datasets. For collaboration enquiries, [email me](mailto:thomas.julian@manchester.ac.uk).
