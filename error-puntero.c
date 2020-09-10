# include <stdio.h>

int main() {
	int *pnum;

	int a = 5;
	int b = 1;

	pnum = &a;

	printf("Antes, a = %d, &a = %p, b = %d, &b = %p, *pnum  %p\n", a, &a, b, &b, pnum);

	pnum++;

	*pnum = 10;

	printf("Después, a = %d, &a = %p, b = %d, &b = %p, *pnum  %p\n", a, &a, b, &b, pnum);
}
