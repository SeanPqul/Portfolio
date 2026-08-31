// Project detail modals & Image preview lightbox with Gallery Navigation
document.addEventListener("DOMContentLoaded", () => {
  const modalTriggers = document.querySelectorAll<HTMLElement>(".project-modal-trigger");
  const modals = document.querySelectorAll<HTMLElement>(".project-modal");
  const imagePreviewModal = document.getElementById("image-preview-modal");
  const imagePreviewImg = document.getElementById("image-preview-img") as HTMLImageElement | null;
  const imagePreviewTitle = document.getElementById("image-preview-title");
  const imagePreviewCounter = document.getElementById("image-preview-counter");
  const imagePreviewClose = document.getElementById("image-preview-close");
  const imagePreviewPrev = document.getElementById("image-preview-prev");
  const imagePreviewNext = document.getElementById("image-preview-next");
  const imagePreviewTriggers = document.querySelectorAll<HTMLElement>(".image-preview-trigger");

  let activeModalTrigger: HTMLElement | null = null;
  let currentGalleryList: HTMLElement[] = [];
  let currentGalleryIndex = 0;

  function closeProjectModal() {
    modals.forEach((modal) => {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    });
    document.body.style.overflow = "";
    activeModalTrigger?.focus();
    activeModalTrigger = null;
  }

  function openProjectModal(modalId: string, trigger: HTMLElement) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    activeModalTrigger = trigger;
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.style.overflow = "hidden";
    modal.querySelector<HTMLElement>(".project-modal-close")?.focus();
  }

  function updateImagePreviewDisplay() {
    if (!imagePreviewImg || !imagePreviewTitle || currentGalleryList.length === 0) return;
    const currentTrigger = currentGalleryList[currentGalleryIndex];
    if (!currentTrigger) return;

    const src = currentTrigger.dataset.imageSrc || "";
    const alt = currentTrigger.dataset.imageAlt || "Project screen preview";
    const label = currentTrigger.dataset.imageLabel || "";

    imagePreviewImg.style.opacity = "0.35";
    imagePreviewImg.src = src;
    imagePreviewImg.alt = alt;
    imagePreviewTitle.textContent = label;

    if (imagePreviewCounter) {
      if (currentGalleryList.length > 1) {
        imagePreviewCounter.textContent = `${currentGalleryIndex + 1} / ${currentGalleryList.length}`;
        imagePreviewCounter.classList.remove("hidden");
      } else {
        imagePreviewCounter.classList.add("hidden");
      }
    }

    setTimeout(() => {
      if (imagePreviewImg) imagePreviewImg.style.opacity = "1";
    }, 50);

    // Hide or show prev/next buttons if only 1 item
    if (imagePreviewPrev && imagePreviewNext) {
      const hasMultiple = currentGalleryList.length > 1;
      imagePreviewPrev.style.display = hasMultiple ? "inline-flex" : "none";
      imagePreviewNext.style.display = hasMultiple ? "inline-flex" : "none";
    }
  }

  function showNextImage() {
    if (currentGalleryList.length <= 1) return;
    currentGalleryIndex = (currentGalleryIndex + 1) % currentGalleryList.length;
    updateImagePreviewDisplay();
  }

  function showPrevImage() {
    if (currentGalleryList.length <= 1) return;
    currentGalleryIndex = (currentGalleryIndex - 1 + currentGalleryList.length) % currentGalleryList.length;
    updateImagePreviewDisplay();
  }

  function openImagePreview(trigger: HTMLElement) {
    if (!imagePreviewModal) return;

    const galleryName = trigger.dataset.gallery;
    if (galleryName) {
      currentGalleryList = Array.from(document.querySelectorAll<HTMLElement>(`.image-preview-trigger[data-gallery="${galleryName}"]`));
    } else {
      const parentModal = trigger.closest(".project-modal") || trigger.closest("section");
      currentGalleryList = parentModal
        ? Array.from(parentModal.querySelectorAll<HTMLElement>(".image-preview-trigger"))
        : [trigger];
    }

    currentGalleryIndex = currentGalleryList.indexOf(trigger);
    if (currentGalleryIndex === -1) currentGalleryIndex = 0;

    updateImagePreviewDisplay();
    imagePreviewModal.classList.remove("hidden");
    imagePreviewModal.classList.add("flex");
    imagePreviewClose?.focus();
  }

  function closeImagePreview() {
    imagePreviewModal?.classList.add("hidden");
    imagePreviewModal?.classList.remove("flex");
    if (currentGalleryList[currentGalleryIndex]) {
      currentGalleryList[currentGalleryIndex].focus();
    }
    if (imagePreviewImg) {
      imagePreviewImg.src = "";
      imagePreviewImg.alt = "";
    }
    if (imagePreviewTitle) imagePreviewTitle.textContent = "";
    if (imagePreviewCounter) imagePreviewCounter.textContent = "";
  }

  modalTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const modalId = trigger.dataset.projectModalTarget;
      if (modalId) openProjectModal(modalId, trigger);
    });
  });

  modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) closeProjectModal();
    });

    modal.querySelectorAll(".project-modal-close").forEach((button) => {
      button.addEventListener("click", closeProjectModal);
    });
  });

  imagePreviewTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openImagePreview(trigger));
  });

  imagePreviewModal?.addEventListener("click", (event) => {
    if (event.target === imagePreviewModal) closeImagePreview();
  });

  imagePreviewClose?.addEventListener("click", closeImagePreview);

  imagePreviewPrev?.addEventListener("click", (e) => {
    e.stopPropagation();
    showPrevImage();
  });

  imagePreviewNext?.addEventListener("click", (e) => {
    e.stopPropagation();
    showNextImage();
  });

  document.addEventListener("keydown", (event) => {
    if (imagePreviewModal?.classList.contains("flex")) {
      if (event.key === "Escape") {
        closeImagePreview();
      } else if (event.key === "ArrowRight") {
        showNextImage();
      } else if (event.key === "ArrowLeft") {
        showPrevImage();
      }
      return;
    }
    if (event.key === "Escape") {
      closeProjectModal();
    }
  });
});
