            document.addEventListener('DOMContentLoaded', function() {
              lang = document.querySelector('.lang');
              description = document.querySelector('.description');
              lang.addEventListener('click', function() {
                description.innerHTML == 'the aesthetic - the ethical - the religious' ? description.innerHTML = 'thẩm mỹ - đạo đức - tôn giáo' : description.innerHTML = 'the aesthetic - the ethical - the religious';
                document.querySelectorAll('p[lang="en"]').forEach(element => {
                  element.style.display == 'block' ? element.style.display = 'none' : element.style.display = 'block';
                });
                document.querySelectorAll('p[lang="vi"]').forEach(element => {
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
                    lang.style.right = '-2.5rem';
                  } else {
                    lang.style.right = '0.5rem';
                  }
                }
              }, false);
            });