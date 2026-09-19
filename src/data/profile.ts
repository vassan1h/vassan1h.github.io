export const profile = {
  name: "Vassanth Mathan",
  tagline:
    "Computational Biologist building reproducible multi-omics pipelines for translational research",
  intro: [
    "I am a computational biologist focused on single-cell and spatial genomics, metagenomics, and clinically grounded bioinformatics.",
    "I design and deliver scalable analysis workflows for scRNA-seq, scATAC-seq, WES, and WGS projects to support disease mechanism discovery and translational decision-making.",
  ],
  currentFocus: [
    "Gastrointestinal disease biology and epithelial cell-state dynamics",
    "End-to-end reproducible pipeline development (Nextflow, Snakemake, Docker, HPC)",
    "Multi-omics integration for biomarker and target discovery",
  ],
  bio: [
    "I am a computational biologist specializing in the intersection of high-resolution genomics, metagenomics, and gastroenterology. Currently, I'm working in the Thiagarajah-Silvester Lab at Boston Children's Hospital, where my work focuses on deconvoluting the genetic and cellular mechanisms driving gastrointestinal tract malignancies like congenital diarrheas and enteropathies, celiac disease, and likewise. My research heavily leverages single-cell and spatial multi-omics to understand complex mucosal and epithelial cell dynamics. Recently, I have utilized trajectory analyses to map intestinal epithelial differentiation, identifying functional mechanisms of enterocytes. To support these clinical findings, I architect and execute end-to-end Next-Generation Sequencing (NGS) pipelines—spanning scRNA-seq, scATAC-seq, WES, and WGS—to process massive multi-omic datasets for cohorts investigating congenital diarrheas and enteropathies. Beyond clinical gastroenterology, my computational background spans systems biology and metagenomics.",
    "During my M.S. in Bioinformatics at Boston University, I utilized constraint-based methodologies to model tumor metabolism and analyzed transcription factor-enhancer-gene (TEG) networks across microglial sequencing datasets. Prior to this, I led a metagenomics project at New Mexico State University, building de novo assembly and functional annotation pipelines to characterize the gut microbiomes of disease-vector mosquitoes.",
    "Because my computational expertise is grounded in a B.S. in Microbiology, I approach algorithmic challenges with a deep, practical understanding of the underlying wet-lab methodologies.",
    "Outside of computational biology, I am a former NCAA Division I Men's Tennis athlete and served as my team's captain. Today, I continue to work as a tennis coach, mentoring competitive junior athletes transitioning to the international ITF circuit. The resilience, strategic thinking, and leadership required in high-performance athletics directly translate into how I troubleshoot complex genomic pipelines and collaborate within multidisciplinary scientific teams.",
  ],
  skills: {
    "Genomics & Metagenomics":
      "Mastery of multi-omic modalities including single-cell, spatial transcriptomics, ATAC-seq, ChIP-seq, and Ribo-seq.",
    "Pipeline Architecture":
      "Building reproducible, scalable workflows using Nextflow, Snakemake, Docker, and High-Performance Computing (HPC) infrastructures.",
    "Data Science & Modeling":
      "Expertise in R, Python, machine learning, and deep learning architectures (PyTorch, CNN, GANs).",
    "Biological Frameworks":
      "Application of systems biology tools (COMETS, COBRA) and transcription factor occupancy prediction (TOBIAS).",
  },
} as const;
