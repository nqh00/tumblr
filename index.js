            document.addEventListener('DOMContentLoaded', function() {
              const lang = document.querySelector('.lang');
              const next = document.querySelector('.next');
              const previous = document.querySelector('.previous');
              const description = document.querySelector('.description');
              const hide = '-2.5rem';
              const show = '0.5rem';
              lang.addEventListener('click', function() {
                description.innerHTML == 'the aesthetic - the ethical - the religious' ? description.innerHTML = 'thẩm mỹ - đạo đức - tôn giáo' : description.innerHTML = 'the aesthetic - the ethical - the religious';
                document.querySelectorAll('[lang="en"]').forEach(element => {
                  element.style.display == 'block' ? element.style.display = 'none' : element.style.display = 'block';
                });
                document.querySelectorAll('[lang="vi"]').forEach(element => {
                  element.style.display == 'none' ? element.style.display = 'block' : element.style.display = 'none';
                });
              });
              
              // auto hide floating button
              let touchstartX = 0, touchstartY = 0, touchendX = 0, touchendY = 0;
              const gestureZone = document.querySelector('.post');
              gestureZone.addEventListener('touchstart', function(event) {
                touchstartX = event.changedTouches[0].screenX;
                touchstartY = event.changedTouches[0].screenY;
              }, false);
              gestureZone.addEventListener('touchend', function(event) {
                touchendX = event.changedTouches[0].screenX;
                touchendY = event.changedTouches[0].screenY;
                const delx = touchendX - touchstartX;
                const dely = touchendY - touchstartY;
                if (Math.abs(delx) < Math.abs(dely)) {
                  if (dely < 0) {
                    lang.style.right = hide;
                    if (next == null) {
                      previous.style.left = hide;
                    } else if (previous == null) {
                      next.style.right = hide;
                    } else {
                      next.style.right = hide;
                      previous.style.left = hide;
                    }
                  } else {
                    lang.style.right = show;
                    if (next == null) {
                      previous.style = show;
                    } else if (previous == null) {
                      next.style = show;
                    } else {
                      next.style.right = show;
                      previous.style.left = show;
                    }
                  }
                }
              }, false);
            });