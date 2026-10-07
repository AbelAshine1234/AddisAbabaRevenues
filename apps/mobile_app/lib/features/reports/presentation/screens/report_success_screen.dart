import 'package:flutter/material.dart';
import 'package:go_router/go_router.dart';
import '../../../../core/theme/app_colors.dart';

class ReportSuccessScreen extends StatelessWidget {
  const ReportSuccessScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: SafeArea(
        child: Padding(
          padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 16),
          child: Column(
            children: [
              // Close X at top right
              Align(
                alignment: Alignment.topRight,
                child: GestureDetector(
                  onTap: () => context.go('/home'),
                  child: Container(
                    padding: const EdgeInsets.all(6),
                    decoration: BoxDecoration(
                      color: AppColors.background,
                      shape: BoxShape.circle,
                    ),
                    child: const Icon(
                      Icons.close_rounded,
                      color: AppColors.text,
                      size: 20,
                    ),
                  ),
                ),
              ),
              const Spacer(),

              // Success Illustration Badge with Confetti
              Stack(
                alignment: Alignment.center,
                clipBehavior: Clip.none,
                children: [
                  Container(
                    width: 88,
                    height: 88,
                    decoration: BoxDecoration(
                      color: AppColors.primary,
                      shape: BoxShape.circle,
                      boxShadow: [
                        BoxShadow(
                          color: AppColors.primary.withValues(alpha: 0.35),
                          blurRadius: 16,
                          offset: const Offset(0, 8),
                        ),
                      ],
                    ),
                    child: const Icon(
                      Icons.check_rounded,
                      color: Colors.white,
                      size: 52,
                    ),
                  ),
                  Positioned(
                    top: -6,
                    right: -10,
                    child: const Text(
                      '🎉',
                      style: TextStyle(fontSize: 28),
                    ),
                  ),
                ],
              ),
              const SizedBox(height: 24),

              // Title & Subtitle
              const Text(
                'Report Submitted!',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: AppColors.text,
                  letterSpacing: -0.3,
                ),
              ),
              const SizedBox(height: 8),
              const Text(
                'Thank you for helping keep\nAddis Ababa safe & compliant.',
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 14,
                  color: AppColors.textSecondary,
                  height: 1.4,
                ),
              ),
              const SizedBox(height: 28),

              // Ticket Card
              Container(
                width: double.infinity,
                padding: const EdgeInsets.all(18),
                decoration: BoxDecoration(
                  color: Colors.white,
                  borderRadius: BorderRadius.circular(16),
                  border: Border.all(color: AppColors.border),
                  boxShadow: [
                    BoxShadow(
                      color: Colors.black.withValues(alpha: 0.04),
                      blurRadius: 10,
                      offset: const Offset(0, 4),
                    ),
                  ],
                ),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Row(
                      mainAxisAlignment: MainAxisAlignment.spaceBetween,
                      children: [
                        const Text(
                          'REPORT ID',
                          style: TextStyle(
                            fontSize: 10,
                            fontWeight: FontWeight.bold,
                            color: AppColors.textMuted,
                            letterSpacing: 0.5,
                          ),
                        ),
                        Container(
                          padding: const EdgeInsets.symmetric(horizontal: 8, vertical: 3),
                          decoration: BoxDecoration(
                            color: AppColors.successBg,
                            borderRadius: BorderRadius.circular(6),
                          ),
                          child: const Text(
                            'Submitted',
                            style: TextStyle(
                              fontSize: 10,
                              fontWeight: FontWeight.w600,
                              color: AppColors.successText,
                            ),
                          ),
                        ),
                      ],
                    ),
                    const SizedBox(height: 6),
                    const Text(
                      '#AARB-2026-04390',
                      style: TextStyle(
                        fontSize: 18,
                        fontWeight: FontWeight.bold,
                        color: AppColors.text,
                        letterSpacing: -0.2,
                      ),
                    ),
                    const SizedBox(height: 14),
                    const Divider(color: AppColors.borderLight, height: 1),
                    const SizedBox(height: 14),
                    _buildTicketRow(
                      icon: Icons.location_on_outlined,
                      text: 'Bole Sub-City, Addis Ababa, Ethiopia',
                    ),
                    const SizedBox(height: 10),
                    _buildTicketRow(
                      icon: Icons.access_time_rounded,
                      text: 'Submitted June 19, 2026 — 9:41 AM',
                    ),
                    const SizedBox(height: 10),
                    _buildTicketRow(
                      icon: Icons.shield_outlined,
                      text: 'Assigned to Bole Sub-City Unit',
                    ),
                    const SizedBox(height: 10),
                    _buildTicketRow(
                      icon: Icons.phone_outlined,
                      text: 'Call 8688 Bureau Hotline / 911',
                      isAction: true,
                    ),
                  ],
                ),
              ),
              const Spacer(flex: 2),

              // Actions
              SizedBox(
                width: double.infinity,
                height: 52,
                child: ElevatedButton.icon(
                  onPressed: () {
                    ScaffoldMessenger.of(context).showSnackBar(
                      const SnackBar(
                        content: Text('Report Reference #AARB-2026-04390 copied to clipboard!'),
                      ),
                    );
                  },
                  icon: const Icon(Icons.share_outlined, size: 20),
                  label: const Text(
                    'Share Report',
                    style: TextStyle(fontSize: 15, fontWeight: FontWeight.w600),
                  ),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: AppColors.primary,
                    foregroundColor: Colors.white,
                    elevation: 0,
                    shape: RoundedRectangleBorder(
                      borderRadius: BorderRadius.circular(14),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 10),
              TextButton(
                onPressed: () => context.go('/home'),
                child: const Text(
                  'Return to Home',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w600,
                    color: AppColors.primary,
                  ),
                ),
              ),
              const SizedBox(height: 10),
            ],
          ),
        ),
      ),
    );
  }

  Widget _buildTicketRow({
    required IconData icon,
    required String text,
    bool isAction = false,
  }) {
    return Row(
      children: [
        Icon(
          icon,
          size: 16,
          color: isAction ? AppColors.primary : AppColors.textMuted,
        ),
        const SizedBox(width: 10),
        Expanded(
          child: Text(
            text,
            style: TextStyle(
              fontSize: 12,
              fontWeight: isAction ? FontWeight.w600 : FontWeight.w500,
              color: isAction ? AppColors.primary : AppColors.textSecondary,
            ),
          ),
        ),
      ],
    );
  }
}
