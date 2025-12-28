import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, Input, ViewChild } from '@angular/core';

export interface ServiceImage {
  src: string;
  alt: string;
}

@Component({
  selector: 'app-carrousel',
  imports: [CommonModule],
  templateUrl: './carrousel.html',
  styleUrl: './carrousel.css',
})

export class Carrousel {
  @Input() images: ServiceImage[] = [];
  @Input() title: string = 'Servicios Digitales & Legales';
  @Input() subtitle: string = 'Desliza para conocer nuestras soluciones integrales';
  @Input() autoplayInterval: number = 4000;

  @ViewChild('sliderWrapper') sliderWrapper!: ElementRef<HTMLDivElement>;

  currentIndex: number = 0;
  cardsPerView: number = 3;
  indicators: number[] = [];
  
  private autoplayTimer: any;
  private startX: number = 0;
  private isDragging: boolean = false;

  ngOnInit(): void {
    this.updateCardsPerView();
    this.createIndicators();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.updateSlider();
      this.startAutoplay();
    }, 0);
  }

  ngOnDestroy(): void {
    this.stopAutoplay();
  }

  @HostListener('window:resize')
  onResize(): void {
    this.updateCardsPerView();
    this.createIndicators();
    this.currentIndex = 0;
    this.updateSlider();
  }

  updateCardsPerView(): void {
    const width = window.innerWidth;
    if (width <= 576) {
      this.cardsPerView = 1;
    } else if (width <= 992) {
      this.cardsPerView = 2;
    } else {
      this.cardsPerView = 3;
    }
  }

  createIndicators(): void {
    const totalSlides = this.images.length - this.cardsPerView + 1;
    this.indicators = Array.from({ length: totalSlides }, (_, i) => i);
  }

  updateSlider(): void {
    if (!this.sliderWrapper) return;
    
    const cards = this.sliderWrapper.nativeElement.querySelectorAll('.slider-card');
    if (cards.length === 0) return;

    const cardWidth = (cards[0] as HTMLElement).offsetWidth;
    const gap = 20;
    const offset = this.currentIndex * (cardWidth + gap);

    this.sliderWrapper.nativeElement.style.transform = `translateX(-${offset}px)`;
  }

  goToSlide(index: number): void {
    this.currentIndex = index;
    this.updateSlider();
  }

  prevSlide(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      this.updateSlider();
    }
  }

  nextSlide(): void {
    if (this.currentIndex < this.images.length - this.cardsPerView) {
      this.currentIndex++;
      this.updateSlider();
    }
  }

  isPrevDisabled(): boolean {
    return this.currentIndex === 0;
  }

  isNextDisabled(): boolean {
    return this.currentIndex >= this.images.length - this.cardsPerView;
  }

  isActiveIndicator(index: number): boolean {
    return index === this.currentIndex;
  }

  onTouchStart(event: TouchEvent): void {
    this.startX = event.touches[0].clientX;
    this.isDragging = true;
  }

  onTouchEnd(event: TouchEvent): void {
    if (!this.isDragging) return;

    const endX = event.changedTouches[0].clientX;
    const diff = this.startX - endX;

    if (Math.abs(diff) > 50) {
      if (diff > 0 && this.currentIndex < this.images.length - this.cardsPerView) {
        this.currentIndex++;
      } else if (diff < 0 && this.currentIndex > 0) {
        this.currentIndex--;
      }
      this.updateSlider();
    }

    this.isDragging = false;
  }

  startAutoplay(): void {
    this.autoplayTimer = setInterval(() => {
      if (this.currentIndex < this.images.length - this.cardsPerView) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
      this.updateSlider();
    }, this.autoplayInterval);
  }

  stopAutoplay(): void {
    if (this.autoplayTimer) {
      clearInterval(this.autoplayTimer);
    }
  }

  onMouseEnter(): void {
    this.stopAutoplay();
  }

  onMouseLeave(): void {
    this.startAutoplay();
  }
}
