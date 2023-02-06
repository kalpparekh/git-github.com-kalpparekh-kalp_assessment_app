import { calculatePoints } from './components/CustomerRewards';


describe('calculatePoints', () => {
  it('should return 90 for $120 purchase', () => {
    const points = calculatePoints(120);
    expect(points).toBe(90);
  });

  it('should return 30 for $80 purchase', () => {
    const points = calculatePoints(80);
    expect(points).toBe(30);
  });

  it('should return 0 for $50 purchase', () => {
    const points = calculatePoints(50);
    expect(points).toBe(0);
  });
});