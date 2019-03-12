import {_fetch} from '../../../utils/mock/functions'

test ('should return a promise',async (done)=>{
  let result = await _fetch("https://developer.mozilla.org");
    expect(result)
    .toEqual("https://developer.mozilla.org")
    done()
})