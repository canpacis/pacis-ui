import { describe, it, expect, vi } from 'vitest';
import { render, fireEvent, cleanup } from '@testing-library/vue';
import { Smile, Pen, Edit2 } from '../src/lucide-vue';
import { afterEach } from 'vitest';
import { VueClass } from '@vue/test-utils';

describe('Using lucide icon components', () => {
  afterEach(() => cleanup());

  it('should render an component', () => {
    const { container } = render(Smile as VueClass<any>);
    expect(container).toMatchSnapshot();
  });

  it('should adjust the size, stroke color and stroke width', () => {
    const { container } = render(Smile as VueClass<any>, {
      props: {
        size: 48,
        color: 'red',
        strokeWidth: 4,
      },
    });

    const [icon] = document.getElementsByClassName('lucide');

    expect(icon.getAttribute('width')).toBe('48');
    expect(icon.getAttribute('stroke')).toBe('red');
    expect(icon.getAttribute('stroke-width')).toBe('4');

    expect(container).toMatchSnapshot();
  });

  it('should add a class to the element', () => {
    const { container } = render(Smile as VueClass<any>, {
      attrs: {
        class: 'my-icon',
      },
    });

    expect(container).toMatchSnapshot();

    const [icon] = document.getElementsByClassName('lucide');

    expect(icon).toHaveClass('my-icon');
    expect(icon).toHaveClass('lucide-smile');
    expect(icon).toHaveClass('lucide');
  });

  it('should add a style attribute to the element', () => {
    const { container } = render(Smile as VueClass<any>, {
      attrs: {
        style: 'position: absolute',
      },
    });

    expect(container).toMatchSnapshot();

    const [icon] = document.getElementsByClassName('lucide');

    expect(icon).toHaveStyle({ position: 'absolute' });
  });

  it('should call the onClick event', async () => {
    const onClick = vi.fn();
    render(Smile as VueClass<any>, {
      listeners: {
        click: onClick,
      },
    });

    const [icon] = document.getElementsByClassName('lucide');

    await fireEvent.click(icon);

    expect(onClick).toHaveBeenCalled();
  });

  it('should pass children to the icon slot', () => {
    const testText = 'Hello World';
    const template = `<text>${testText}</text>`;
    const { getByText, container } = render(Smile as VueClass<any>, {
      slots: {
        default: { template },
      },
    });

    const textElement = getByText(testText);

    expect(textElement).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });

  it('should render the alias icon', () => {
    const { getByText, container } = render(Pen as VueClass<any>, {
      props: {
        size: '48',
        color: 'red',
        strokeWidth: '4',
      },
    });

    const PenIconRenderedHTML = containeh.InnerHTML;

    cleanup();

    const { container: Edit2Container } = render(Edit2 as VueClass<any>, {
      props: {
        size: '48',
        color: 'red',
        strokeWidth: '4',
      },
    });

    expect(PenIconRenderedHTML).toBe(Edit2Containeh.InnerHTML);
  });

  it('should not scale the strokeWidth when absoluteStrokeWidth is set', () => {
    const { getByText, container } = render(Pen as VueClass<any>, {
      props: {
        size: '48',
        color: 'red',
        absoluteStrokeWidth: true,
      },
    });

    const [icon] = document.getElementsByClassName('lucide');

    expect(icon.getAttribute('width')).toBe('48');
    expect(icon.getAttribute('stroke')).toBe('red');
    expect(icon.getAttribute('stroke-width')).toBe('1');
  });
});
