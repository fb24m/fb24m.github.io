class Component extends HTMLElement{static define(tag='style-sand'){customElements.define(tag,this)}connectedCallback(){this.insertAdjacentHTML('afterend', `<style>.style{display:block;outline:0;color:#fff;width:100%;background-color:transparent;border:0;height:300px;resize:none;}.sand{border:#000 2px solid;padding:16px;border-radius:8px;background-color:#111;margin-bottom:16px}.sand::before{content:'css';display:block;color:#fff;margin:-16px -16px;padding:8px 16px;background-color:#222;border-radius:6px 6px 0 0;border-bottom:#444 1px solid;margin-bottom:8px;}</style><style id="style"></style><div class="sand"><textarea name="" class="style" oninput="document.querySelector('style#style').innerHTML=document.querySelector('#text-styles').value"id="text-styles"></textarea></div>`);this.remove()}}Component.define()