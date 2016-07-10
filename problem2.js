var a, ans, b, ref, ref1;

ref = [0, 1], a = ref[0], b = ref[1];

ans = 0;

while (b < 4000000) {
  if (b % 2 === 0) {
    ans = ans + b;
  }
  ref1 = [b, a + b], a = ref1[0], b = ref1[1];
}

alert(ans);
