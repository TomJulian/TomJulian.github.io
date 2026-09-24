---
layout: page
permalink: /repositories/
title: Code & Resources
description: Reusable research tools and model resources that can be shared publicly.
nav: true
nav_order: 5
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

## CLSA vascular longitudinal associations

<div class="resource-item">
  <p class="resource-kicker">Python | Associated manuscript forthcoming</p>
  <h3>Longitudinal analysis of retinal vascular morphology</h3>
  <p>A reproducible Python analysis workflow for studying how retinal vascular morphology changes over time in the Canadian Longitudinal Study on Aging. It prepares baseline and follow-up data, derives longitudinal change measures, tests associations with demographic, cardiovascular, metabolic, and behavioural factors, and runs survival analyses for mortality and cardiovascular outcomes.</p>
  <p>The workflow begins with vascular measurements generated previously with AutoMorph. It does not contain retinal vessel segmentation code, CLSA source data, or a route to data access.</p>
  <div class="resource-actions">
    <a class="btn btn-primary" href="https://github.com/TomJulian/CLSA-Vascular-Longitudinal-Associations">View code on GitHub</a>
  </div>
</div>
