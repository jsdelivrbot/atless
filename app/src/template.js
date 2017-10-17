export default (title, body) => {
  return (`<!DOCTYPE html><html><head><link rel="icon" href="favicon.ico" type="image/x-icon" /><meta name="viewport" content="width=device-width, initial-scale=1" /><meta name="author" content="Tyler Ferrara" /><title>${title}</title></head><body><div id="root">${body}</div></body><script src="/assets/bundle.js"></script></html>`);
};
